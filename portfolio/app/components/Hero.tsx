export default function Hero() {
  return (
    <section
      className="h-[calc(100vh-4rem)] bg-cover bg-center text-white flex items-center justify-center px-10"
      style={{ backgroundImage: "url('/images/herobg2.jpg')" }}
    >
      {/* Left Side - Text */}
      <div className="w-1/2">
        <h1 className="text-5xl font-bold">Hello,</h1>
        <h1 className="text-5xl font-bold">I'm Aadarsh Ravi</h1>
        <p className="text-lg mt-4 max-w-md">
          A Full Stack Developer passionate about building
          amazing web applications.
        </p>
      </div>

      {/* Right Side - Image with Fixed Height */}
      <div className="w-1/2 flex justify-center h-full">
        <img
          src="/images/profile.png"
          alt="Hero Image"
          className="max-w-full h-[80vh] object-cover mt-12 ml-24"
        />
      </div>
    </section>
  );
}
