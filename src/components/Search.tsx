"use client";

import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input, Button } from "@heroui/react";

const Search = () => {
  const [title, setTitle] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = () => {
    if (!title.trim()) return;
    const current = new URLSearchParams(searchParams?.toString() || "");
    current.set("title", title);
    router.push(`/store?${current.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 max-w-md mx-auto"
    >
      <Input
        value={title}
        onValueChange={setTitle}
        onKeyPress={handleKeyPress}
        placeholder="Search products..."
        variant="bordered"
        radius="lg"
        classNames={{
          input: "text-text",
          inputWrapper: "bg-background",
        }}
        startContent={<MagnifyingGlassIcon className="w-5 h-5 text-text/50" />}
        isClearable
        size="lg"
      />

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          onClick={handleSearch}
          color="primary"
          variant="shadow"
          radius="lg"
          size="lg"
          className="bg-primary"
          endContent={
            <motion.span
              animate={{
                x: title.length > 0 ? [0, 3, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                repeat: title.length > 0 ? Infinity : 0,
                repeatDelay: 1.5,
              }}
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </motion.span>
          }
        >
          Search
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Search;
