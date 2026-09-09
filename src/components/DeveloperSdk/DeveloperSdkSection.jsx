import { PiBooks, PiCheckCircle, PiUsersThree } from "react-icons/pi";
import code from "../../assets/images/code.png";
import { developerSdkData } from "../../data/developerSdkData";

const DeveloperSdkSection = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex w-full flex-col items-stretch overflow-hidden rounded-2xl bg-[#0D0D0D] lg:flex-row md:rounded-3xl">
          <div className="flex w-full flex-col items-start justify-center px-8 py-16 lg:w-1/2">
            <span className="mb-6 flex items-center gap-2 rounded-full bg-[#E4E3DF] px-3 py-1.5 text-xs font-semibold tracking-wide text-[#131210]">
              <PiUsersThree className="h-4 w-4" />
              {developerSdkData.badge.text}
            </span>

            <h2 className="mb-6 font-['Newsreader'] text-3xl font-bold leading-tight text-[#FCFCFD] md:text-4xl">
              {developerSdkData.heading}
            </h2>

            <p className="mb-8 font-['DM_Sans'] text-base font-normal leading-[1.75] text-[#FCFCFD]">
              {developerSdkData.description}
            </p>

            <ul className="mb-10 w-full space-y-4">
              {developerSdkData.features.map((feature) => (
                <li key={feature.id} className="flex items-start gap-3 lg:gap-4">
                  <PiCheckCircle
                    weight="duotone"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F4A016]"
                  />
                  <span className="text-sm font-normal leading-normal text-[#FCFCFD]">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={developerSdkData.cta.url}
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-[#333230] px-5 py-4 font-medium text-white transition-colors hover:bg-gray-800 sm:w-auto"
            >
              {developerSdkData.cta.label}
              <PiBooks className="h-5 w-5" />
            </a>
          </div>

          <div className="relative min-h-[300px] w-full bg-[#1A1A1A] sm:min-h-[400px] lg:min-h-0 lg:w-1/2">
            <img
              src={code}
              alt={developerSdkData.media.alt}
              className="absolute inset-0 h-full w-full object-cover object-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSdkSection;