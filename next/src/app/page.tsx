"use client";

export default function Home() {
  const signInClick = async () => {
    window.location.href = "http://localhost:4000/auth/google";
  };
  return (
    <div>
      <h1>hello world</h1>
      <button
        onClick={signInClick}
        className="flex justify-center w-full border border-red-500"
      >
        sign into google
      </button>
    </div>
  );
}
