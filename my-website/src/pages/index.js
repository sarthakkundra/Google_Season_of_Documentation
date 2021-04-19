import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
	{
		title: "What is FLINT?",
		imageUrl: "img/undraw_docusaurus_mountain.svg",
		description: (
			<>
				The Full Lands Integration Tool (FLINT) is a C++ framework that combines
				satellite and ground data in ways that meet policy needs.
			</>
		),
	},
	{
		title: "Why FLINT?",
		imageUrl: "img/undraw_docusaurus_tree.svg",
		description: (
			<>
				The FLINT makes developing and operating advanced systems achievable by
				all countries. It is a generic platform with a modular structure,
				allowing countries to attach any variety of models or data to build
				country-specific systems.
			</>
		),
	},
	// {
	// 	title: "Powered by React",
	// 	imageUrl: "img/undraw_docusaurus_react.svg",
	// 	description: (
	// 		<>
	// 			Extend or customize your website layout by reusing React. Docusaurus can
	// 			be extended while reusing the same header and footer.
	// 		</>
	// 	),
	// },
];

function Feature({ imageUrl, title, description }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx("col col--6", styles.feature)}>
			{imgUrl && (
				<div className='text--center'>
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

export default function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description='Description will go into a meta tag in <head />'>
			<header className={clsx("hero hero--primary", styles.heroBanner)}>
				<div className='container'>
					<h1 className='hero__title'>{siteConfig.title}</h1>
					<p className='hero__subtitle'>{siteConfig.tagline}</p>
					<div className={styles.buttons}>
						<Link
							className={clsx(
								"button button--outline button--secondary button--lg",
								styles.getStarted
							)}
							to={useBaseUrl("docs/")}>
							Get Started
						</Link>
					</div>
				</div>
			</header>
			<main>
				{features && features.length > 0 && (
					<section className={styles.features}>
						<div className='container'>
							<div className='row'>
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}
