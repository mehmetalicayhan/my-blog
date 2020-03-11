import React from "react";
import Head from "next/head";

export default function Seo() {
  const site = {
    title: "Mehmet Ali Çayhan - Personal Blog Site",
    description:
      "Mehmet Ali Çayhan personal Blog site .3rd year Computer engineering student at Sakarya University",
    url: "https://mehmetalicayhan.com"
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <title>{site.title}</title>
      <meta name="description" content={site.description} />

      <meta property="og:type" content="personal.personal" />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:url" content={site.url} />
    </Head>
  );
}
