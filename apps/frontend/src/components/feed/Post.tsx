import React, { useState } from 'react';
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function Post() {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ description, selectedFile });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-slate-900">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">Create Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600 dark:text-gray-300">Upload a file (image, text, PDF, etc.):</label>
            <Input
              type="file"
              accept=".jpg,.png,.jpeg,.pdf,.txt"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
            />
            {selectedFile && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Selected file: {selectedFile.name}</p>
            )}
          </div>
          <Button type="submit" variant="blue" className="w-full py-2">Post</Button>
        </form>
      </div>
    </div>
  );
}

export default Post;