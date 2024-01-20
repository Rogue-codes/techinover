import { Icons } from "../../icons";

export default function Footer() {
  return (
    <footer className="w-full text-white py-[3.75rem] bg-black px-[4.17vw]">
      <div className="w-full flex justify-between items-start">
        <div className="druk w-[30.14vw] text-xl font-bold">
          <p>SHORT LINE ABOUT US</p>
          <p>THREE WORDS HERE</p>
        </div>

        <div className="w-[8vw] druk text-xl font-bold">
          <p>CONNECT</p>
          <p>WITH</p>
          <p>US</p>
        </div>

        <div className="clash text-xs font-medium w-[15.14vw] flex justify-between items-center">
          <ul>
            <li>Twitter</li>
            <li>Discord</li>
            <li>Instagram</li>
          </ul>

          <ul>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <hr className="my-8" />

      <div className="clash flex justify-between items-center">
        <div className="w-[23.12vw] flex justify-between items-center">
          <div className="flex justify-between items-center gap-5">
            <p>2022</p>
            <Icons.dot />
            <p>PLATFORM</p>
          </div>

          <div>
            <p>2022</p>
          </div>
        </div>
        <div className="w-[27.75vw] flex justify-between items-center">
          <p>TERMS & CONDITIONS</p>
          <p>PRIVACY POLICY</p>
        </div>
      </div>
    </footer>
  );
}
