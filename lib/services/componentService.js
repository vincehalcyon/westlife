import dynamic from "next/dynamic";

export const components = {
  MainBanner: dynamic(() =>
    import("../../components/blocks/MainBanner").then(
      (module) => module.default
    )
  ),
  Trapezoid: dynamic(() =>
    import("../../components/blocks/Trapezoid").then((module) => module.default)
  ),
  OurClients: dynamic(() =>
    import("../../components/blocks/OurClients").then(
      (module) => module.default
    )
  ),
  ContactUsBlock: dynamic(() =>
    import("../../components/blocks/ContactUsBlock").then(
      (module) => module.default
    )
  ),
  GetAQuote: dynamic(() =>
    import("../../components/blocks/GetAQuote").then((module) => module.default)
  ),
  HomeFeature: dynamic(() =>
    import("../../components/blocks/HomeFeature").then((module) => module.default)
  ),
  BackBanner: dynamic(() =>
    import("../../components/blocks/BackBanner").then(
      (module) => module.default
    )
  ),
  FeatureOverview: dynamic(() =>
    import("../../components/blocks/FeatureOverview").then(
      (module) => module.default
    )
  ),
  PageHeader: dynamic(() =>
    import("../../components/blocks/PageHeader").then(
      (module) => module.default
    )
  ),
  Carousel: dynamic(() =>
    import("../../components/blocks/Carousel").then((module) => module.default)
  ),
  MonthlyMaintenance: dynamic(() =>
    import("../../components/blocks/MonthlyMaintenance").then(
      (module) => module.default
    )
  ),
  OurProjects: dynamic(() =>
    import("../../components/blocks/OurProjects").then(
      (module) => module.default
    )
  ),
  Feature: dynamic(() =>
    import("../../components/blocks/Feature").then((module) => module.default)
  ),
  BasicPage: dynamic(() =>
    import("../../components/blocks/BasicPage").then((module) => module.default)
  ),
  Login: dynamic(() =>
    import("../../components/blocks/Login").then((module) => module.default)
  ),
  ForgotPassword: dynamic(() =>
    import("../../components/blocks/ForgotPassword").then(
      (module) => module.default
    )
  ),
  Error404: dynamic(() =>
    import("../../components/blocks/Error404").then((module) => module.default)
  ),
  CardGrid: dynamic(() =>
    import("../../components/blocks/CardGrid").then((module) => module.default)
  ),
  Caption: dynamic(() =>
    import("../../components/blocks/Caption").then((module) => module.default)
  ),
  HeaderQuote: dynamic(() =>
    import("../../components/blocks/HeaderQuote").then(
      (module) => module.default
    )
  ),
  ThankYou: dynamic(() =>
    import("../../components/blocks/ThankYou").then(
      (module) => module.default
    )
  ),
  PortfolioCarousel: dynamic(() =>
    import("../../components/blocks/PortfolioCarousel").then(
      (module) => module.default
    )
  ),
};
