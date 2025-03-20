import React, { useState } from "react";

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    
    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    const progressInterval: number = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Upload a File</h2>

      {/* Drag and Drop Area */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-full max-w-lg border-2 border-dashed border-gray-400 rounded-lg p-10 bg-white text-center hover:bg-gray-50 transition cursor-pointer"
      >
        <input type="file" className="hidden" id="fileUpload" onChange={handleFileChange} />
        <label htmlFor="fileUpload" className="cursor-pointer">
          <p className="text-lg text-gray-600">Drag and drop a file here or</p>
          <span className="text-blue-500 font-semibold hover:underline">Browse File</span>
        </label>
      </div>

      {/* File Preview */}
      {file && (
        <div className="mt-6 w-full max-w-lg bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold">Selected File:</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-700">{file.name}</span>
            <span className="text-gray-500 text-sm">{(file.size / (1024 * 1024)).toFixed(2)} KB</span>
          </div>
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className={`mt-4 px-6 py-3 rounded-lg text-white ${uploading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} transition`}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {/* Progress Bar */}
      {uploading && (
        <div className="w-full max-w-lg bg-gray-200 rounded-full mt-4">
          <div
            className="bg-blue-500 text-xs font-medium text-white text-center py-1 rounded-full"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      )}
    </section>
  );
};

export default Upload;
