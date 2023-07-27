import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
  variable: "--secondaryfont",
});

export { poppins };
