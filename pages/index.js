import Head from "next/head";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    let hero = document.getElementById("hero");
    console.log(hero);
    hero.children[0].classList.remove("hidden");
  }, [typeof window]);
  return (
    <>
      <Head></Head>
      <div id="bkgd" />
      <div id="wrapper">
        <div className="relative">
          <div id="hero" className="w-100 pb-20">
            <div className="page absolute mx-auto rounded hidden">
              <div className="page-inner relative h-full mb-12 text-center border border-lime-400 rounded-lg">
                <div className="header p-5 w-full border-b border-lime-300 flex items-center justify-center">
                  <h1 className="text-6xl leading-none uppercase tracking-widest whitespace-nowrap font-light opacity-70">
                    Ensign
                  </h1>
                </div>
                <div className="body p-5 w-full">
                  <div className=" w-full flex justify-center">
                    <img src="https://placehold.it/400x400" />
                  </div>
                  <ul>
                    <li className="my-3">
                      The content area is updated using cookies to track the
                      user's rank.
                    </li>
                    <li className="my-3">
                      If cookies are not enabled, they are required to Sign In.
                    </li>
                  </ul>
                  Laborum amet in voluptate cupidatat tempor non aute consequat
                  proident culpa veniam elit non. Non in qui incididunt eu
                  occaecat ipsum fugiat pariatur proident aliqua irure dolor.
                  Adipisicing adipisicing sit nisi incididunt sint fugiat. Duis
                  deserunt veniam et in sit et incididunt ipsum ea. Duis
                  proident in ad non proident sunt officia in culpa aliquip eu
                  sit excepteur. Eu occaecat quis cupidatat Lorem in ad nulla
                  consequat ipsum id commodo. Laboris elit tempor mollit
                  adipisicing non pariatur aliqua proident minim irure esse
                  fugiat. Officia magna eu laboris do nisi cupidatat dolore
                  velit pariatur do quis ullamco est. Excepteur nisi labore
                  dolore proident pariatur officia sint officia id aliquip nisi.
                  Officia elit et consectetur aute ea. Sint laborum labore
                  cupidatat ad culpa voluptate non culpa est tempor minim sint
                  cupidatat enim. Quis exercitation dolore id cupidatat
                  consectetur cupidatat sunt quis eiusmod reprehenderit.
                  Cupidatat est deserunt et eu non nulla tempor labore. Fugiat
                  et excepteur deserunt laborum deserunt nulla excepteur
                  reprehenderit dolore. Irure amet excepteur consectetur ea ea
                  excepteur adipisicing excepteur exercitation cillum pariatur
                  in magna anim. Fugiat aute cillum et ullamco cupidatat sint in
                  commodo adipisicing incididunt quis Lorem. Aute incididunt
                  cillum cupidatat sint officia. Enim duis officia deserunt ut
                  magna enim. Ut excepteur quis occaecat occaecat consectetur
                  cillum est magna. Ea sint ex minim elit reprehenderit
                  adipisicing duis laborum voluptate culpa. Excepteur magna amet
                  reprehenderit deserunt voluptate ex enim non dolor culpa. Amet
                  sit minim nulla officia laboris. Elit laboris minim elit
                  deserunt reprehenderit ad excepteur do laborum. Dolor officia
                  dolor velit laborum sit duis do ut quis ullamco anim ea. Ut
                  elit enim officia duis non quis sunt ex irure dolor. Voluptate
                  dolor est irure occaecat magna mollit adipisicing aliquip
                  eiusmod. Anim non ex ullamco consequat. Non ex veniam laboris
                  eu cillum quis. Sunt exercitation labore enim veniam cillum
                  esse reprehenderit consectetur. Ea et est Lorem ad velit duis
                  adipisicing anim. Et dolor aliqua irure do. Pariatur nulla
                </div>
                <div className="footer p-5 w-full">
                  <button className="w-full p-6 bg-lime-700 rounded uppercase tracking-wider text-lg">
                    Join the Army
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
