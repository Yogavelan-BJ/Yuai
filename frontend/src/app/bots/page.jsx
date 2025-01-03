"use client";
import React, { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useFetchData } from "@/hooks/useFetchData";

// import {
//   setUniversities,
//   setCourses,
//   setSemesters,
//   setSubjects,
//   setBot,
// } from "../../redux/features/selectbotSlice";

// import { useSelector, useDispatch } from "react-redux";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

function page() {
  const { loading, data } = useFetchData();
  useEffect(() => {
    console.log(data);
  }, [data]);
  const [openUniv, setOpenUniv] = useState(false);
  const [valueUniv, setValueUniv] = useState("");
  const [openSem, setOpenSem] = useState(false);
  const [valueSem, setValueSem] = useState("");
  const [openSubj, setOpenSubj] = useState(false);
  const [valueSubj, setValueSubj] = useState("");

  useEffect(() => {}, []);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-[20%] h-full bg-slate-600 flex flex-col p-2">
        <h1 className=" text-white text-4xl text-left font-junge mt-6">YUAI</h1>

        <div className="h-[1px] bg-white w-full rounded-lg my-2"></div>

        {/*-----------------------SELECT UNIVERSITY-------------------------------------*/}
        <div className="h-14 w-full my-1 bg-slate-500 rounded-lg">
          <Popover open={openUniv} onOpenChange={setOpenUniv}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openUniv}
                className="w-full h-full justify-between"
              >
                {valueUniv
                  ? frameworks.find(
                      (framework) => framework.value === valueUniv
                    )?.label
                  : "Select University..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Command>
                <CommandInput
                  placeholder="Search University..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No University found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValueUniv(
                            currentValue === valueUniv ? "" : currentValue
                          );
                          setOpenUniv(false);
                        }}
                      >
                        {framework.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            valueUniv === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/*-----------------------SELECT SEM-------------------------------------*/}

        <div className="h-14 w-full my-1 bg-slate-500 rounded-lg">
          <Popover open={openSem} onOpenChange={setOpenSem}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openSem}
                className="w-full h-full justify-between"
              >
                {valueSem
                  ? frameworks.find((framework) => framework.value === valueSem)
                      ?.label
                  : "Select Semester..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Command>
                <CommandInput
                  placeholder="Search Semester..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No Semester found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValueSem(
                            currentValue === valueSem ? "" : currentValue
                          );
                          setOpenSem(false);
                        }}
                      >
                        {framework.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            valueSem === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/*-----------------------SELECT SUBJECT-------------------------------------*/}

        <div className="h-14 w-full my-1 bg-slate-500 rounded-lg">
          <Popover open={openSubj} onOpenChange={setOpenSubj}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openSubj}
                className="w-full h-full justify-between"
              >
                {valueSubj
                  ? frameworks.find(
                      (framework) => framework.value === valueSubj
                    )?.label
                  : "Select Subject..."}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Command>
                <CommandInput placeholder="Search Subject..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No Subject found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValueSubj(
                            currentValue === valueSubj ? "" : currentValue
                          );
                          setOpenSubj(false);
                        }}
                      >
                        {framework.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            valueSubj === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="w-[80%] h-full bg-slate-800 flex flex-col items-center">
        <div className="h-full w-full"></div>
        <div className="flex w-[90%] items-center space-x-2 my-10">
          <Input
            type="text"
            placeholder="Ask your Questions"
            className="w-full"
          />
          <Button type="submit">Send</Button>
        </div>
      </div>
    </div>
  );
}

export default page;
