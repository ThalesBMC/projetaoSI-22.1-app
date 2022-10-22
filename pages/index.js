import { NextSeo } from "next-seo";
import { useEffect } from "react";
import Router from "next/router";

export default function Home() {
  useEffect(() => {
    Router.push("home");
  }, []);
  return <></>;
}
