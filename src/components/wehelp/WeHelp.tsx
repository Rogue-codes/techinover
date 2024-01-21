export default function WeHelp() {
  return (
    <>
        <div
      className="w-full lg:hidden h-[38rem]"
      style={{
        backgroundImage: 'url("/tems.svg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        backgroundAttachment: "fixed",
      }}
    >

    </div>

    <div
      className="w-full h-[38rem] hidden lg:block"
      style={{
        backgroundImage: 'url("/tems.svg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        backgroundAttachment: "fixed",
      }}
    >

    </div>
    </>

  );
}
