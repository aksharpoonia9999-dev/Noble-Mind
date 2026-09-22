// HEADER / NAVIGATION

const NAV_DATA = ["Home", "About Us", "Solutions", "Resources"];

const navList = document.getElementById("navList");

navList.innerHTML = NAV_DATA.map((item) => {
  return `
  <li class=" relative font-normal text-base leading-[150%] text-[#4C4C4C] max-lg:text-white hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-main-gradient after:transition-all after:duration-300 hover:after:w-full">
    <a href="#">${item}</a>
    </li>
    `;
}).join("");

function openMenu() {
  navList.classList.toggle("max-lg:right-0!");

  document.documentElement.classList.toggle("overflow-hidden");
  document.body.classList.toggle("overflow-hidden");

  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");

  line1.classList.toggle("rotate-45");
  line1.classList.toggle("translate-y-2");

  line2.classList.toggle("opacity-0");

  line3.classList.toggle("-rotate-45");
  line3.classList.toggle("-translate-y-2");
}

document.addEventListener("click", (event) => {
  const menuButton = document.getElementById("menuButton");

  const isMenuOpen = navList.classList.contains("max-lg:right-0!");

  if (
    isMenuOpen &&
    !navList.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    openMenu();
  }
});

// VISION / CONTENT

const CONTENT_DATA = [
  "The future of how we live, work, and learn. We see a world where technology is not just a tool but a transformative force for good, reshaping every aspect of human existence.",

  "Technology is seen as a force for good, capable of driving positive change in society and improving the human experience.",

  "Share insights and innovations that have a positive impact across borders and sectors.",
];

//

const contentList = document.getElementById("contentList");

contentList.innerHTML = CONTENT_DATA.map((item, index) => {
  return `
    <div 
    data-aos="zoom-out-down"
      data-aos-delay="${index * 250}"
      class="flex gap-[10px] items-start border border-[#CFA7FF] rounded-16 px-3 py-3">

      <span>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="url(#paint0_linear_88648_1136)" fill-opacity="0.12"/>
            <path d="M8 17.12L11.2 20.32M15.68 15.2L18.88 12M13.12 17.12L16.32 20.32L24 12" stroke="url(#paint1_linear_88648_1136)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <linearGradient id="paint0_linear_88648_1136" x1="3.65064" y1="-10.5217" x2="103.411" y2="75.8188" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A854E9"/>
            <stop offset="1" stop-color="#4F91FC"/>
            </linearGradient>
            <linearGradient id="paint1_linear_88648_1136" x1="9.82532" y1="9.26437" x2="32.9659" y2="47.7789" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A854E9"/>
            <stop offset="1" stop-color="#4F91FC"/>
            </linearGradient>
            </defs>
        </svg>

      </span>

      <p class="text-base leading-[150%] font-normal text-[#323232]">
        ${item}
      </p>

    </div>
  `;
}).join("");

// SERVICES / INDUSTRIES

const INDUSTRY_DATA = [
  {
    title: "Healthcare",
    description:
      "we are on a mission to revolutionize the field of Healthcare through cutting-edge innovation.",
    icon: `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="72" height="72" rx="36" fill="url(#paint0_linear_88648_1183)" fill-opacity="0.16"/>
<path d="M35.6808 14.8906C35.4545 14.966 15.6684 28.1149 15.3332 28.4249C14.9561 28.7601 14.7885 29.2043 14.8304 29.7742C14.8639 30.3692 15.0818 30.7547 15.5427 31.0731C15.8444 31.2826 16.5567 31.3916 16.9506 31.291C17.0679 31.2575 21.4593 28.3746 26.7138 24.8716L36.2674 18.5026L45.821 24.8716C51.0755 28.3746 55.4669 31.2575 55.5842 31.291C56.0116 31.4 56.6904 31.2826 57.034 31.048C57.872 30.4614 57.9558 29.1037 57.2016 28.4249C56.9334 28.1735 37.206 15.0415 36.9127 14.9158C36.6529 14.8068 36.0076 14.79 35.6808 14.8906Z" fill="url(#paint1_linear_88648_1183)"/>
<path d="M26.3381 28.3829L16.4492 34.5677V44.1129V53.6582L16.642 54.2448C17.1532 55.77 18.1337 56.8176 19.6338 57.4377L20.2204 57.6808L36.0174 57.7059C47.222 57.7227 51.9401 57.6975 52.2586 57.6305C53.0212 57.4713 54.0101 56.9182 54.6302 56.3064C55.2504 55.6779 55.6107 55.0996 55.8957 54.2448L56.0884 53.6582V44.1129V34.5677L46.1744 28.3746C40.7188 24.9721 36.2521 22.1898 36.2437 22.1982C36.2353 22.1982 31.7769 24.9805 26.3381 28.3829ZM39.5372 36.3108V39.621H42.8474H46.1577V42.8894V46.1577H42.8474H39.5372V49.4261V52.6944H36.2688H33.0005V49.4261V46.1577H29.6902H26.38V42.8894V39.621H29.6902H33.0005V36.3108V33.0005H36.2688H39.5372V36.3108Z" fill="url(#paint2_linear_88648_1183)"/>
<defs>
<linearGradient id="paint0_linear_88648_1183" x1="8.21394" y1="-23.6738" x2="232.676" y2="170.592" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint1_linear_88648_1183" x1="19.7176" y1="36.76" x2="58.3311" y2="-50.0751" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint2_linear_88648_1183" x1="20.9714" y1="69.3876" x2="132.774" y2="-38.6182" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
</defs>
</svg>

            `,
  },

  {
    title: "Education",
    description:
      "Education is rooted in the idea that learning should be a lifelong journey",
    icon: `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="72" height="72" rx="36" fill="url(#paint0_linear_88648_1201)" fill-opacity="0.12"/>
<path d="M35.9607 20.5122C35.7967 20.5707 31.4524 22.1515 26.3 24.0251C21.1477 25.887 16.7096 27.5147 16.4403 27.6435C15.5738 28.0533 15.6206 28.6388 16.5574 29.0721C16.897 29.2243 18.0329 29.6576 19.0985 30.0323C20.1641 30.407 21.054 30.7349 21.0774 30.7466C21.1008 30.77 20.9018 31.0276 20.6442 31.3438C19.6722 32.5148 19.1687 34.0019 19.0282 36.1448C18.9462 37.4212 18.9462 37.4212 18.5715 37.6671C17.8338 38.1589 17.4825 39.4353 17.8572 40.3135C17.9392 40.5243 18.1851 40.8522 18.3959 41.063C18.7589 41.4143 18.7706 41.4728 18.7003 42.0115C18.4076 44.2481 17.0961 47.2575 15.4801 49.4004C15.2108 49.7517 15 50.0796 15 50.1381C15 50.3138 16.452 51.3091 17.2015 51.6604L17.9509 52L18.4427 51.7073C19.1219 51.3091 20.0001 50.3372 20.328 49.6112C20.972 48.206 21.0189 47.843 21.0306 44.3652C21.0306 41.3791 21.0423 41.1098 21.2414 40.8873C21.4873 40.618 21.78 39.8803 21.7917 39.5173C21.7917 39.0489 21.5341 38.3931 21.1828 37.9833C20.8198 37.5734 20.8198 37.5734 20.8901 36.5547C21.0189 34.6694 21.6044 33.1237 22.588 32.0932C23.1149 31.5311 23.3491 31.414 29.6959 28.6856C36.6281 25.6996 36.675 25.6879 37.0731 26.2617C37.2722 26.5427 37.3073 27.1868 37.1317 27.5029C37.0614 27.6435 34.9419 28.6154 31.4875 30.0908C28.4429 31.3906 25.937 32.4679 25.9253 32.4796C25.9136 32.4914 28.2673 33.3579 31.1713 34.4118C35.1058 35.8404 36.5345 36.3088 36.8155 36.2619C37.1668 36.2151 56.1016 29.2828 56.5818 29.0369C56.8862 28.873 57.0619 28.4866 56.9799 28.2055C56.933 28.065 56.652 27.8425 56.3007 27.6903C55.4693 27.3156 36.5579 20.3716 36.3822 20.3833C36.312 20.3833 36.1246 20.4419 35.9607 20.5122Z" fill="url(#paint1_linear_88648_1201)"/>
<path d="M43.3367 36.5549C39.894 37.8313 36.9549 38.9086 36.8143 38.9437C36.6504 38.9906 34.4607 38.2529 30.2451 36.7189C26.7673 35.4542 23.8983 34.4237 23.8515 34.4237C23.8164 34.4237 23.7812 35.1146 23.7812 35.9577C23.7812 37.4449 23.793 37.4917 24.1208 37.9718C24.6127 38.7095 24.7532 39.2482 24.6946 40.267C24.6595 40.9578 24.5658 41.2974 24.3199 41.7658C24.0037 42.3396 24.0037 42.3747 24.1794 42.726C24.6595 43.6511 28.3949 45.2671 31.4512 45.8877C33.7815 46.3444 36.0532 46.4732 38.3717 46.239C43.1377 45.7823 48.8521 43.5808 49.5313 41.9415C49.6249 41.7307 49.6484 40.4777 49.6366 37.9367L49.6015 34.2481L43.3367 36.5549Z" fill="url(#paint2_linear_88648_1201)"/>
<defs>
<linearGradient id="paint0_linear_88648_1201" x1="8.21394" y1="-23.6738" x2="232.676" y2="170.592" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint1_linear_88648_1201" x1="24" y1="46.1094" x2="74" y2="14.1094" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint2_linear_88648_1201" x1="29.3223" y1="44.0981" x2="50.396" y2="22.4108" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
</defs>
</svg>
            `,
  },

  {
    title: "Finance",
    description:
      "Recognizing that knowledge is the cornerstone of financial empowerment",
    icon: `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="72" height="72" rx="36" fill="url(#paint0_linear_88648_1219)" fill-opacity="0.12"/>
<path d="M21.3196 17.0514C20.6932 17.2022 20.1249 17.643 19.7885 18.1997C19.487 18.7332 19.4754 18.8028 19.4406 20.7746C19.4058 22.004 19.4522 23.0363 19.5218 23.3959C19.6842 24.1034 20.1713 24.7297 20.8324 25.0545L21.3312 25.298H19.5218C17.8516 25.298 17.6776 25.3212 17.2021 25.5648C16.8657 25.7504 16.5757 26.0287 16.3438 26.3999L15.9958 26.9566L15.961 29.172C15.9146 31.6424 15.9842 32.0368 16.5525 32.6863C17.3296 33.5678 16.8077 33.533 26.4925 33.533H35.1335L35.9686 32.7327C36.4209 32.292 37.14 31.6888 37.5576 31.3873L38.3231 30.8421V29.1488C38.3231 28.2093 38.2651 27.2466 38.1955 27.003C38.0563 26.4811 37.3604 25.6692 36.8733 25.4604C36.5601 25.3212 36.6993 25.3096 38.0911 25.298C39.9237 25.298 40.3876 25.1936 40.9908 24.6485C41.7447 23.9642 41.8258 23.593 41.7795 20.9138L41.7447 18.594L41.3967 18.0837C41.1995 17.8053 40.8052 17.4574 40.5268 17.295L40.0049 17.005L30.842 16.9818C25.8082 16.9702 21.5167 17.005 21.3196 17.0514Z" fill="url(#paint1_linear_88648_1219)"/>
<path d="M44.3433 31.329C42.6615 31.5378 40.7941 32.2221 39.4023 33.15C38.4976 33.7415 37.013 35.1681 36.4098 36.0264C33.603 39.9815 33.603 45.3053 36.4098 49.2488C37.0478 50.1303 38.4048 51.4409 39.3559 52.0789C43.1138 54.619 48.1476 54.6421 51.9055 52.1369C54.1789 50.629 55.8027 48.4253 56.603 45.7576C57.0089 44.4122 57.1249 41.8373 56.8465 40.4919C56.371 38.207 55.3503 36.2816 53.7497 34.681C52.1491 33.0688 50.5601 32.1409 48.484 31.619C47.2777 31.3174 45.4683 31.1898 44.3433 31.329ZM46.373 35.2957C46.4774 35.4349 46.5586 35.7017 46.5586 35.864C46.5586 36.1424 46.6166 36.1888 47.0573 36.2584C47.8808 36.3976 49.3191 37.0007 49.5742 37.3255C49.8874 37.7314 49.8758 38.2302 49.5162 38.5781C49.1451 38.9609 48.7275 38.9493 47.8228 38.5317C47.4169 38.3345 46.9413 38.149 46.7674 38.1026L46.4426 38.033V39.6568V41.269L47.3473 41.5937C49.0755 42.1969 49.8874 42.8928 50.2237 44.041C50.8037 46.0592 49.5858 47.7874 47.2313 48.2629L46.5586 48.3905V49.0864C46.5586 49.8403 46.315 50.2347 45.8395 50.2347C45.3639 50.2347 45.1668 49.9099 45.1668 49.1328V48.4137L44.1577 48.1701C43.0558 47.8918 41.6176 47.2655 41.2348 46.8827C40.7129 46.3608 41.1189 45.2473 41.8264 45.2473C41.9771 45.2473 42.6151 45.5025 43.253 45.8156C43.8909 46.1404 44.61 46.4304 44.8536 46.4767L45.2827 46.5463V44.8645V43.1712L44.6332 42.9856C42.0003 42.2201 40.8869 40.6543 41.5132 38.5549C41.8612 37.3835 43.1486 36.4092 44.5868 36.2352C45.1436 36.1656 45.1668 36.154 45.1668 35.8176C45.1668 35.0985 45.9903 34.7506 46.373 35.2957Z" fill="url(#paint2_linear_88648_1219)"/>
<path d="M44.2974 38.1608C44.0422 38.2768 43.7639 38.4856 43.6827 38.6363C43.4507 39.0191 43.4855 39.773 43.7407 40.121C43.961 40.4225 44.8541 40.9445 45.1441 40.9561C45.2485 40.9561 45.2833 40.5733 45.2833 39.4482C45.2833 37.9636 45.2833 37.9404 45.0281 37.9404C44.8773 37.9404 44.5526 38.0448 44.2974 38.1608Z" fill="url(#paint3_linear_88648_1219)"/>
<path d="M46.4453 45.0847V46.6621L46.8281 46.5809C47.3616 46.4649 47.7907 46.2214 47.9995 45.9198C48.2663 45.5486 48.2431 44.6556 47.9531 44.296C47.7444 44.0176 46.8281 43.5073 46.5613 43.5073C46.4917 43.5073 46.4453 44.0988 46.4453 45.0847Z" fill="url(#paint4_linear_88648_1219)"/>
<path d="M21.7504 34.6001C21.1009 34.7393 20.1614 35.644 20.057 36.2123C20.0222 36.4327 19.999 37.6621 20.0222 38.9496L20.057 41.2809L20.4049 41.7796C20.6021 42.058 20.9733 42.3827 21.2748 42.5335L21.7968 42.8003L19.2683 42.8119C17.1689 42.8119 16.6818 42.8467 16.3686 42.9975C15.8467 43.2642 15.4871 43.6122 15.232 44.1225C15.0232 44.5169 15 44.8068 15 46.941C15 49.2027 15.0116 49.3419 15.2668 49.8058C15.4175 50.061 15.7655 50.4437 16.0323 50.6409L16.5426 50.9889L25.5779 51.0237L34.6132 51.0469L34.0797 50.2234C31.7716 46.651 31.1916 42.2436 32.5255 38.2652C32.8966 37.1634 33.5345 35.8295 34.0449 35.0872C34.2189 34.8205 34.3348 34.5769 34.3 34.5305C34.1841 34.4145 22.3071 34.4725 21.7504 34.6001Z" fill="url(#paint5_linear_88648_1219)"/>
<defs>
<linearGradient id="paint0_linear_88648_1219" x1="8.21394" y1="-23.6738" x2="232.676" y2="170.592" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint1_linear_88648_1219" x1="18.8972" y1="38.9761" x2="68.7687" y2="-28.402" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint2_linear_88648_1219" x1="36.8937" y1="61.4728" x2="107.732" y2="0.253634" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint3_linear_88648_1219" x1="43.7277" y1="41.9476" x2="51.3631" y2="38.0997" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint4_linear_88648_1219" x1="46.6439" y1="47.6994" x2="54.3726" y2="44.0089" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint5_linear_88648_1219" x1="17.2375" y1="56.4981" x2="69.4487" y2="3.04054" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
</defs>
</svg>
            `,
  },

  {
    title: "Marketing",
    description:
      " where marketing campaigns are driven by data-driven insights, and where creativity knows no bounds.",
    icon: `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="72" height="72" rx="36" fill="url(#paint0_linear_88648_1192)" fill-opacity="0.16"/>
<path d="M34.7753 15.082C33.789 15.4519 33.074 16.1012 32.6055 17.0546C32.3507 17.5806 32.3425 17.6382 32.3425 18.6245C32.3425 19.6272 32.3507 19.6683 32.6219 20.2272C32.9671 20.9258 33.6411 21.6162 34.2986 21.9368L34.7671 22.1669V23.5478V24.9286L34.0274 25.0683C32.4986 25.3478 30.9945 25.956 29.7699 26.7943L29.1123 27.2382L28.1507 26.2683L27.189 25.2984L27.3123 24.9039C27.6164 23.9505 27.5589 23.0217 27.1315 22.1094C26.4082 20.556 24.5753 19.7094 22.8904 20.145C21.5014 20.5149 20.5397 21.4683 20.1781 22.8738C19.9397 23.7779 20.0548 24.6491 20.5233 25.5532C21.3452 27.1231 23.2356 27.871 24.937 27.2875L25.3315 27.1478L26.3014 28.1176L27.2712 29.0793L26.8274 29.7368C25.989 30.9615 25.3808 32.4656 25.1014 33.9943L24.9616 34.7341H23.5808H22.2L21.9699 34.2656C21.6493 33.608 20.9589 32.9341 20.2603 32.5888C19.7014 32.3176 19.6603 32.3094 18.6575 32.3094C17.6548 32.3094 17.6137 32.3176 17.0548 32.5888C16.2986 32.9587 15.6493 33.608 15.2795 34.3642C15.0082 34.9231 15 34.9642 15 35.9669C15 36.9697 15.0082 37.0108 15.2795 37.5697C15.6493 38.3258 16.3068 38.9751 17.0548 39.3368C17.5644 39.5834 17.7205 39.6245 18.4685 39.6491C19.1671 39.682 19.389 39.6573 19.8411 39.5012C20.7863 39.1888 21.5342 38.5313 21.9945 37.6108L22.2 37.1998H23.5808H24.9616L25.1014 37.9395C25.3808 39.4683 25.989 40.9724 26.8274 42.1971L27.2712 42.8546L26.3014 43.8162L25.3315 44.7779L24.937 44.6546C23.9836 44.3505 23.0548 44.408 22.1425 44.8354C20.589 45.5587 19.7425 47.3916 20.1781 49.0601C20.7041 51.0902 22.7096 52.3067 24.6822 51.7888C26.8274 51.2299 27.9863 49.1341 27.3123 47.0299L27.189 46.6354L28.1507 45.6656L29.1123 44.6957L29.7863 45.1478C31.0521 46.0025 32.4986 46.5861 34.0274 46.8656L34.7671 47.0053V48.3861V49.7669L34.2986 49.9971C33.6411 50.3176 32.9671 51.008 32.6219 51.7067C32.3507 52.2656 32.3425 52.3067 32.3425 53.3094C32.3425 54.2957 32.3507 54.3532 32.6055 54.8793C33.0822 55.8491 33.8055 56.4984 34.8164 56.8519C35.2192 56.9916 35.4493 57.0162 36.1644 56.9916C36.9452 56.9669 37.0849 56.9341 37.6027 56.6793C38.3589 56.3176 39.0082 55.6683 39.3781 54.9121C39.6493 54.3532 39.6575 54.3121 39.6575 53.3094C39.6575 52.3149 39.6493 52.2656 39.3863 51.7231C39.0411 51.0245 38.3507 50.3094 37.7014 49.9971L37.2329 49.7669V48.3861V47.0053L37.9726 46.8656C39.5014 46.5861 40.9479 46.0025 42.2137 45.1478L42.8877 44.6957L43.8493 45.6656L44.811 46.6354L44.6877 47.0299C44.3753 47.9916 44.4329 48.9039 44.8685 49.8327C45.3205 50.7943 46.1918 51.5012 47.3014 51.7888C49.9973 52.4875 52.5205 49.9642 51.8219 47.2683C51.263 45.1395 49.1671 43.9888 47.063 44.6546L46.6685 44.7779L45.6986 43.8162L44.7288 42.8546L45.1808 42.1806C46.0356 40.9149 46.6192 39.4683 46.8986 37.9395L47.0384 37.1998H48.411H49.7836L49.9973 37.6108C50.4822 38.5478 51.2219 39.1888 52.1589 39.5012C52.611 39.6573 52.8329 39.682 53.5315 39.6491C54.2794 39.6245 54.4356 39.5834 54.9452 39.3368C55.6931 38.9751 56.3507 38.3258 56.7205 37.5697C56.9918 37.0108 57 36.9697 57 35.9669C57 34.9642 56.9918 34.9231 56.7205 34.3642C56.3507 33.608 55.7014 32.9587 54.9452 32.5888C54.3863 32.3176 54.3452 32.3094 53.3425 32.3094C52.3397 32.3094 52.2986 32.3176 51.7397 32.5888C51.0411 32.9258 50.3589 33.5998 50.0219 34.2656L49.7918 34.7341H48.411H47.0384L46.8986 33.9943C46.6192 32.4656 46.011 30.9615 45.1726 29.7368L44.7288 29.0793L45.6986 28.1176L46.6685 27.1478L47.063 27.2875C49.1096 27.9861 51.263 26.7943 51.8219 24.6491C52.5205 21.9697 49.989 19.4464 47.3014 20.145C45.1726 20.7039 44.0137 22.808 44.6877 24.9039L44.811 25.2984L43.8493 26.2683L42.8877 27.2382L42.2301 26.7943C41.0055 25.956 39.5014 25.3478 37.9726 25.0683L37.2329 24.9286V23.5478V22.1669L37.6438 21.9614C38.5644 21.5012 39.2219 20.7532 39.5342 19.808C39.6904 19.356 39.7151 19.1341 39.6822 18.4354C39.6575 17.6875 39.6164 17.5313 39.3699 17.0217C39.0082 16.2656 38.3589 15.6162 37.6027 15.2546C37.0685 14.9916 36.9534 14.9669 36.1233 14.9505C35.3836 14.9258 35.137 14.9505 34.7753 15.082ZM37.5205 30.1231C38.3507 30.4025 38.9918 30.8217 39.6082 31.4957C40.4384 32.3998 40.8493 33.4765 40.8493 34.7341C40.8493 35.8354 40.5616 36.7067 39.8877 37.6354C39.7233 37.8491 39.6082 38.0382 39.6247 38.0546C39.6411 38.071 39.8219 38.1697 40.0274 38.2683C40.9479 38.7368 42.0164 39.6162 42.6575 40.4464L43.0027 40.8984L42.7562 41.2025C42.6247 41.3751 42.2466 41.7697 41.926 42.082L41.3425 42.6409L40.989 42.1642C40.1178 40.9888 38.7452 40.0847 37.3726 39.7888C36.3945 39.5751 34.8575 39.6491 33.9863 39.945C32.811 40.3478 31.9151 41.0135 31.1425 42.0573C30.9041 42.3697 30.6904 42.6245 30.6658 42.6245C30.5918 42.6245 29.3014 41.3258 29.137 41.0957C29.0301 40.9313 29.0548 40.8738 29.6548 40.1505C30.3616 39.3039 30.8959 38.8519 31.7671 38.3834C32.0877 38.219 32.3589 38.0628 32.3753 38.0546C32.3918 38.0382 32.2767 37.8491 32.1123 37.6354C31.4384 36.7067 31.1507 35.8354 31.1507 34.7341C31.1507 33.4765 31.5616 32.3998 32.3918 31.4957C33.7562 30.008 35.663 29.4984 37.5205 30.1231Z" fill="url(#paint1_linear_88648_1192)"/>
<path d="M34.8667 32.5225C33.979 32.9581 33.5352 33.7061 33.5352 34.7335C33.5352 35.7609 33.979 36.5088 34.8667 36.9444C35.2941 37.1663 35.4584 37.1992 36.0009 37.1992C36.5434 37.1992 36.7078 37.1663 37.1352 36.9444C38.0228 36.5088 38.4667 35.7691 38.4667 34.7252C38.4667 33.2705 37.4557 32.2677 35.9927 32.2677C35.4584 32.2677 35.2941 32.3006 34.8667 32.5225Z" fill="url(#paint2_linear_88648_1192)"/>
<defs>
<linearGradient id="paint0_linear_88648_1192" x1="8.21394" y1="-23.6738" x2="232.676" y2="170.592" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint1_linear_88648_1192" x1="19.7915" y1="70.8288" x2="150.882" y2="-42.4705" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint2_linear_88648_1192" x1="34.0978" y1="38.8207" x2="49.4719" y2="25.5148" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
</defs>
</svg>
            `,
  },

  {
    title: "Entertainment",
    description:
      "We believe that technology has the power to transport individuals to new worlds, unlock creativity",
    icon: `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="72" height="72" rx="36" fill="url(#paint0_linear_88648_1210)" fill-opacity="0.16"/>
<path d="M24.1106 14.9301C21.9832 15.4429 19.8369 17.1714 18.8302 19.1658C16.8358 23.0976 18.5643 27.9981 22.629 29.8975C23.6357 30.3723 24.2245 30.5243 25.4402 30.5813C28.0044 30.7142 29.9038 29.9925 31.6893 28.169L32.62 27.2193L33.9116 28.4159C35.697 30.1064 36.7797 30.5243 39.4009 30.5243C41.3003 30.5243 41.4713 30.4863 42.7249 29.8785C47.6444 27.4472 48.822 21.1981 45.0992 17.2474C41.9461 13.9044 36.9506 13.8664 33.6647 17.1334L32.601 18.1971L31.8412 17.3423C29.9988 15.215 26.9027 14.2463 24.1106 14.9301ZM27.0357 20.2674C28.0234 20.7613 28.5742 21.616 28.5742 22.6037C28.5742 24.2562 27.5105 25.3009 25.839 25.3009C24.3195 25.3009 23.0469 23.7054 23.3318 22.1669C23.6547 20.4954 25.5731 19.5077 27.0357 20.2674ZM40.4646 20.2864C42.193 21.1032 42.5159 23.2875 41.1104 24.6361C40.6735 25.054 40.3316 25.1869 39.5529 25.2439C37.8814 25.3769 36.6847 24.3322 36.6847 22.7557C36.6847 20.7043 38.6601 19.4317 40.4646 20.2864Z" fill="url(#paint1_linear_88648_1210)"/>
<path d="M49.2016 33.5822C47.4541 34.475 45.9915 35.1778 45.9725 35.1398C45.9346 35.1018 45.7256 34.6649 45.4787 34.1711C45.2128 33.5822 44.7759 33.0694 44.2821 32.7465L43.5033 32.2337L32.8476 32.1767L22.1918 32.1387L21.3561 32.5755C20.7862 32.8795 20.3114 33.3353 19.9315 33.9431L19.3617 34.8548L19.3047 39.5654C19.2667 42.4715 19.3237 44.5419 19.4376 45.0167C19.7416 46.1184 20.4064 46.9921 21.3561 47.524C22.1728 47.9798 22.3628 47.9988 26.1426 48.0558L30.0934 48.1128L28.004 51.1709C26.6364 53.1843 25.9147 54.4189 25.9147 54.7418C25.9147 55.6155 27.0543 56.2803 27.8141 55.8814C28.023 55.7675 29.2007 54.1719 30.4353 52.3295C32.4297 49.3284 32.6576 49.0245 32.8855 49.3474C37.0833 55.6345 37.1972 55.7865 37.805 55.8434C38.5458 55.9194 39.4006 55.2736 39.4006 54.6278C39.4006 54.3619 38.5458 52.9183 37.3112 51.0759L35.2218 47.9988L39.2676 47.9039C42.5916 47.8279 43.3893 47.7519 43.8832 47.486C44.6619 47.0681 45.3837 46.1754 45.6686 45.3396L45.8776 44.6749L49.2775 46.3843C52.1836 47.8659 52.7345 48.0748 53.1334 47.9229C53.3993 47.8089 53.7222 47.562 53.8361 47.334C53.9691 47.0681 54.0261 44.7318 53.9881 39.8123L53.9311 32.6705L53.4753 32.3096C53.2283 32.1197 52.8864 31.9487 52.7155 31.9677C52.5445 31.9677 50.968 32.6895 49.2016 33.5822Z" fill="url(#paint2_linear_88648_1210)"/>
<defs>
<linearGradient id="paint0_linear_88648_1210" x1="8.21394" y1="-23.6738" x2="232.676" y2="170.592" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint1_linear_88648_1210" x1="21.3413" y1="35.8198" x2="66.3747" y2="-36.0404" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint2_linear_88648_1210" x1="23.2524" y1="63.9023" x2="97.1173" y2="-28.4152" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
</defs>
</svg>
            `,
  },

  {
    title: "Agriculture",
    description:
      "We are passionate about regenerative farming practices and sustainable agriculture",
    icon: `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="72" height="72" rx="36" fill="url(#paint0_linear_88648_1231)" fill-opacity="0.16"/>
<path d="M26.4815 16.541C26.3665 16.6149 26.153 16.8694 26.0052 17.1158C25.8491 17.3622 25.1429 18.167 24.4367 18.906C22.8435 20.5567 21.6774 21.9938 20.3881 23.9236C19.2795 25.5825 18.3433 27.3809 17.9573 28.6128C16.8158 32.2261 17.5385 35.7655 19.8789 38.0156C20.6098 38.7137 21.0779 39.0257 21.2996 38.9518C21.4639 38.9025 21.4721 38.8368 21.4803 37.7364C21.4885 37.0959 21.4885 36.5457 21.4803 36.5046C21.4475 36.2993 21.7349 32.8502 21.8416 32.1932C22.0223 31.0436 22.3344 29.8856 22.6711 29.0726C23.0406 28.1775 23.1556 28.0461 23.0817 28.6128C22.2933 34.9115 23.6729 40.816 27.2288 46.3509C27.7297 47.1229 27.935 47.2871 28.4031 47.2871C28.8301 47.2871 29.0601 47.0407 29.3064 46.3263C30.1194 44.0105 30.875 42.212 31.9097 40.1426C33.7328 36.5128 35.4984 33.9917 38.0195 31.4706C39.8262 29.6557 41.7478 28.1611 43.6119 27.1182C44.039 26.88 44.1622 26.8472 44.3018 26.9211C44.6385 27.1017 44.4989 27.3399 43.5134 28.3171C41.3947 30.4112 39.7523 32.5628 38.4383 34.9443C38.1345 35.4945 37.8963 36.0119 37.9127 36.094C37.9456 36.2829 38.5779 36.5128 39.4566 36.6606C41.6985 37.0302 43.9076 36.4553 45.7717 35.0182C46.5026 34.4516 47.5784 33.269 48.2107 32.3329C48.531 31.8648 49.3522 30.5344 50.042 29.3847C51.5941 26.7733 52.1772 25.952 53.2119 24.9009C54.1317 23.9729 54.9529 23.3899 55.9055 23.0121C56.6281 22.7165 56.9156 22.4947 56.9895 22.158C57.0552 21.8378 56.8417 21.3697 56.5624 21.2301C56.4393 21.1644 55.8151 21.0494 55.1828 20.9755C49.1633 20.2857 45.123 20.5895 41.6082 21.9938C39.1856 22.9628 37.0176 24.5231 35.7119 26.2477C35.1042 27.0607 34.3651 28.5142 34.1598 29.3026C33.9463 30.1402 33.9052 31.5116 34.0777 32.3329L34.2173 33.0145L34.0202 33.2772C32.3449 35.5766 31.3923 37.1452 30.1769 39.6088C29.6924 40.6024 29.0765 41.9328 28.8219 42.5651C28.5591 43.1975 28.3128 43.7641 28.2635 43.8216C28.2142 43.8791 28.0828 43.9201 27.9679 43.9037C27.779 43.8791 27.6722 43.7231 27.1713 42.7294C26.5964 41.5879 25.9477 40.0358 25.8574 39.5841C25.8163 39.3706 25.8656 39.3049 26.3911 38.8779C29.52 36.3568 30.604 33.1459 29.5117 29.6311C29.4214 29.3354 28.978 28.3418 28.5345 27.4138C27.2863 24.827 26.8921 23.4556 26.8921 21.6243C26.8921 20.532 27.0399 19.7273 27.4669 18.438C27.8775 17.2226 27.8775 17.0501 27.5162 16.6888C27.2041 16.3767 26.8346 16.3192 26.4815 16.541Z" fill="url(#paint1_linear_88648_1231)"/>
<path d="M36.6631 43.107C34.0598 43.3451 31.7194 45.4556 31.1117 48.0917C30.9556 48.7651 30.7585 48.9869 30.0112 49.3318C28.5413 50.0134 27.3177 49.8163 26.0202 48.683C25.2154 47.985 24.7883 47.714 24.1889 47.5333C22.957 47.1473 21.5199 47.4512 20.477 48.3135C19.7707 48.9047 19.4176 49.4139 18.8017 50.7607C18.6293 51.122 18.5225 51.1877 17.7423 51.4094C16.1081 51.8611 15.3198 52.7152 15.057 54.3412C14.9338 55.1049 14.9995 55.4252 15.3608 55.7454L15.6565 56L32.2203 55.9507C41.3275 55.9261 48.973 55.885 49.2112 55.8604C49.9913 55.7783 50.328 55.302 50.213 54.4315C50.0077 52.9533 49.3179 51.8529 48.2503 51.3109C47.6262 50.9988 47.2156 50.9003 46.2548 50.8264C45.4993 50.7689 45.4172 50.7442 45.1954 50.5225C45.0394 50.3665 44.908 50.0955 44.8095 49.7424C44.4646 48.4941 43.6844 47.7304 42.4526 47.443C41.2947 47.172 41.0894 47.0077 40.9744 46.244C40.7691 44.889 39.718 43.6243 38.4779 43.2712C37.821 43.0741 37.3693 43.0331 36.6631 43.107Z" fill="url(#paint2_linear_88648_1231)"/>
<defs>
<linearGradient id="paint0_linear_88648_1231" x1="8.21394" y1="-23.6738" x2="232.676" y2="170.592" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint1_linear_88648_1231" x1="21.9407" y1="57.4405" x2="118.696" y2="-49.8797" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
<linearGradient id="paint2_linear_88648_1231" x1="19.0197" y1="60.2506" x2="48.2866" y2="-8.78835" gradientUnits="userSpaceOnUse">
<stop stop-color="#A854E9"/>
<stop offset="1" stop-color="#4F91FC"/>
</linearGradient>
</defs>
</svg>
            `,
  },
];

//

const industryList = document.getElementById("industryList");

industryList.innerHTML = INDUSTRY_DATA.map((item, index) => {
  return `
    <div
    data-aos="zoom-in-right"
      data-aos-delay="${index * 200}"
      class="
        group
        cursor-pointer
        min-h-[270px]
        rounded-16
        border border-[#B4B4B4]
        bg-[#EFEFEF]
        p-5
        transition-all duration-300 ease-in-out
        hover:border-transparent
        hover:shadow-[0px_9px_50px_0px_#0000001F]
      "
    >

        ${item.icon}
          
      <h3 class="mt-5 text-2xl font-bold leading-[140%] text-black">
        ${item.title}
      </h3>

      <p class="mt-2 text-base leading-[150%] font-normal text-[#303030]">
        ${item.description}
      </p>

    </div>
  `;
}).join("");

// WHY CHOOSE US / VALUES

const VALUES_DATA = [
  {
    title: "Customer-Centric",
    description:
      "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.",
  },
  {
    title: "Global Resonance",
    description:
      "Share insights and innovations that have a positive impact across borders and sectors.",
  },
  {
    title: "Ethical Leadership",
    description:
      "Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.",
  },
  {
    title: "Innovation",
    description:
      "Stay at the vanguard of technological transformation, redefining futures and driving excellence in all our offerings.",
  },
  {
    title: "Commitment to Vision 2030",
    description:
      "Align with and champion Saudi Arabia's technological and societal aspirations.",
  },
  {
    title: "Collaboration",
    description:
      "Forge strategic partnerships across industries and institutions, emphasizing both global and local advancements.",
  },
  {
    title: "Social Responsibility",
    description:
      "Dedicate ourselves to uplifting communities, driving positive change, and promoting sustainable in both business and societal arenas.",
  },
  {
    title: "Workplace Harmony",
    description:
      " Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are than a team; we are a family.",
  },
];

const valuesList = document.getElementById("valuesList");

valuesList.innerHTML = VALUES_DATA.map((item, index) => {
  return `
        <div 
        data-aos="fade-down-right"
      data-aos-delay="${index * 150}"
            class="
                group
                rounded-16
                border border-[#C2C2C2]
                cursor-pointer
                bg-white
                p-[10px] sm:p-[12px]
                transition-all duration-300
                hover:backdrop-blur-[52px] hover:shadow-[0px_9px_50px_0px_#0000001F]
            "
        >
            <div class="flex items-start">

              <div class="flex items-center gap-2">    
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="12" fill="url(#paint0_linear_88648_1250)" fill-opacity="0.16"/>
                      <path d="M6 12.84L8.4 15.24M11.76 11.4L14.16 9M9.84 12.84L12.24 15.24L18 9" stroke="url(#paint1_linear_88648_1250)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <defs>
                      <linearGradient id="paint0_linear_88648_1250" x1="2.73798" y1="-7.89125" x2="77.5586" y2="56.8641" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A854E9"/>
                      <stop offset="1" stop-color="#4F91FC"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_88648_1250" x1="7.36899" y1="6.94827" x2="24.7244" y2="35.8342" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A854E9"/>
                      <stop offset="1" stop-color="#4F91FC"/>
                      </linearGradient>
                      </defs>
                      </svg>
                </span>

                
                <h3 class=" font-bold text-base leading-[150%] text-black">
                        ${item.title}
                </h3>
              </div>
                
            </div>
            <p class="mt-[16px] font-normal text-base leading-[150%] text-[#333333]">
                  ${item.description}
                </p>
            
        </div>
    `;
}).join("");

// FOOTER

const footerData = [
  {
    title: "Main Menu",
    links: ["Home", "About Us", "How it Works", "Why Choose Us", "Steps"],
  },
  {
    title: "Legal",
    links: ["Terms ", "Privacy"],
  },
];

const footer = document.getElementById("footer");

footer.innerHTML = `

  <div class="grid grid-cols-2 xl:gap-[142px] lg:gap-[120px] gap-20 ">

    ${footerData
      .map(
        (section) => `
          <div class="max-w-max">
            <h3 class="font-bold max-w-max text-base leading-[150%] text-white">
              ${section.title}
            </h3>

            <ul class="flex flex-col gap-2 mt-[12px]">
              ${section.links
                .map(
                  (link) => `
                    <li class="group relative w-fit text-white/80 font-normal text-base leading-[150%] cursor-pointer before:absolute before:left-0 before:bottom-[-2px] before:h-[1px] before:w-0 before:bg-main-gradient before:transition-all before:duration-300 before:content-[''] hover:before:w-full">
                      <a href="#" class=" block">
                        ${link}
                      </a>
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </div>
        `,
      )
      .join("")}

  </div>

  `;

// Year function

const yearElement = document.getElementById("year");

const currentYear = new Date().getFullYear();

yearElement.textContent = currentYear;
