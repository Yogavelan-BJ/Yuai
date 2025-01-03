import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatMistralAI, MistralAIEmbeddings } from "@langchain/mistralai";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { configDotenv } from "dotenv";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { createRetrievalChain } from "langchain/chains/retrieval";

configDotenv();

const loader = new PDFLoader("../resources/srwc.pdf");
const docs = await loader.load();

const embeddings = new MistralAIEmbeddings({
  model: "mistral-embed",
});

const vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);

const model = new ChatMistralAI({
  model: "pixtral-12b-2409",
  temperature: 0.2,
});

const promptTemplate = ChatPromptTemplate.fromTemplate(`
    System: answer the given question without mentioning the textbook.
    Context: {context}
    Question: {input}`);

const retriever = vectorStore.asRetriever({
  k: 2,
});

const chain = promptTemplate.pipe(model);

const retrieverChain = await createRetrievalChain({
  combineDocsChain: chain,
  retriever,
});

export const srwcController = async (req, res) => {
  const { prompt } = req.body;
  const response = await retrieverChain.invoke({ input: prompt });
  res.send(response.answer.content);
};
