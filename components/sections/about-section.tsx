"use client"

import { MapPinIcon, EnvelopeIcon, CommandLineIcon } from "@heroicons/react/24/outline"
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons"
import { Button } from "@/components/ui/button"

export const AboutSection = () => {
	return (
		<section id="about" className="py-20 px-4 relative z-10 bg-white dark:bg-gray-900">
			<div className="max-w-6xl mx-auto">
				<div className="mb-16">
					<p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
						<CommandLineIcon className="inline h-4 w-4 mr-2"/>
						cat about.md
					</p>
					<h2 className="section-title mb-4">The Short Version</h2>
					<div className="accent-line"></div>
				</div>

				<div className="grid lg:grid-cols-5 gap-12 items-start">
					{/* Image - takes 2 cols */ }
						<div className="lg:col-span-2">
							<div className="relative">
								<div
									className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden">
									<img
										src="/bg_me.png?height=500&width=500"
										alt="Vince Angelo Batecan"
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Floating terminal decoration */ }
								<div className="absolute -bottom-4 -right-4 bg-gray-900 text-gray-300 rounded-xl p-4 font-mono text-xs shadow-xl">
									<div className="text-green-400">$ whoami</div>
									<div>vince-batecan</div>
									<div className="text-gray-500 mt-1">// UE IT Student</div>
									<div className="text-gray-500">// Full-Stack Dev</div>
								</div>
							</div>
						</div>

					{/* Content - takes 3 cols */ }
					<div className="lg:col-span-3 space-y-6">
						<div className="prose prose-gray dark:prose-invert max-w-none">
							<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
								I am <span className="text-primary font-semibold">Vince Angelo Batecan</span> and a Full Stack
								Developer.
								I specialize on building REST APIs, Websites, and hardware integrations.
							</p>
							<br/>
							<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
								Currently studying as an IT at University of the East Caloocan while working on side projects and
								freelancing.
								Lately, I've been learning and working on artificial intelligence and machine learning.
							</p>
							<br/>
							<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
								My works now includes AI-Intelligent applications, Machine Learning models, and leveraging AI to create
								a better user experience and cutting-edge features.
							</p>
						</div>

						{/* Quick Info */}
						<div className="grid grid-cols-2 gap-4 pt-4">
							<div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
								<div className="p-2">
									<MapPinIcon className="h-4 w-4 text-primary icon-monochrome"/>
								</div>
								<div>
									<div className="font-mono text-xs text-secondary">Location</div>
									<div className="text-sm font-medium">Valenzuela, PH</div>
								</div>
							</div>
							<div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
								<div className="p-2">
									<EnvelopeIcon className="h-4 w-4 text-primary icon-monochrome"/>
								</div>
								<div>
									<div className="font-mono text-xs text-secondary">Email</div>
									<div className="text-sm font-medium">vbatecan@gmail.com</div>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div className="flex flex-wrap gap-3 pt-4">
							<Button
								variant="outline"
								size="sm"
								className="font-mono rounded-lg"
								onClick={ () => window.open("https://github.com/vbatecan", "_blank") }
							>
								<GithubIcon className="h-4 w-4 mr-2"/>
								GitHub
							</Button>
							<Button
								variant="outline"
								size="sm"
								className="font-mono rounded-lg"
								onClick={ () => window.open("https://www.linkedin.com/in/vince-batecan/", "_blank") }
							>
								<LinkedinIcon className="h-4 w-4 mr-2"/>
								LinkedIn
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}