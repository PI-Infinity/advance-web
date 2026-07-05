"use client";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const pathname = usePathname();
  const id: any = pathname?.split("/")[pathname?.split("/")?.length - 1];

  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const GetCertificate = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://ena-language-cd3e5f9314ac.herokuapp.com/api/v1/certificates/" +
          id,
      );
      if (response.data.status === "success") {
        setCertificateUrl(response.data.data.url);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "შეცდომა მოხდა");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) GetCertificate();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        იტვირთება...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        {error}
      </div>
    );

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[#1E293B]">
      {certificateUrl ? (
        <object
          data={certificateUrl + "#toolbar=0&navpanes=0&scrollbar=0"}
          type="application/pdf"
          className="w-full max-w-4xl h-[635px] rounded-lg shadow-lg"
        >
          {/* fallback - თუ object არ იმუშავა */}
          <img
            src={certificateUrl}
            alt="სერტიფიკატი"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </object>
      ) : (
        <div>სერტიფიკატი ვერ მოიძებნა</div>
      )}
    </div>
  );
};

export default Page;
