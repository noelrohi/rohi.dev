import { authMiddleware } from "@clerk/nextjs";
import { siteConfig } from "./config/site";

export default authMiddleware({

  publicRoutes: [...siteConfig.mainNav.map((navItem) => navItem.href), '/api(.*)']

});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};