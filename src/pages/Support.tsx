import Layout from '@/components/Layout'
import { useEffect } from 'react'

const faqs = [
	{
		q: 'How do I join a team?',
		a: 'Go to the Board page, browse available teams, and click "Join Team" if there’s still an open slot. You can also filter teams by rank, role, or playstyle to find your best match.',
	},
	{
		q: 'Can I create my own team?',
		a: 'Yes! You can create a new team from the Dashboard by setting your team name, rank, preferred roles, and playstyle (e.g., chill, competitive, scrim).',
	},
	{
		q: 'What does "Minus One" mean?',
		a: '“Minus One” means a team is missing one player — just one spot left to complete the squad. It’s the perfect way to find that last teammate fast.',
	},
	{
		q: 'How do I find teammates that match my vibe?',
		a: 'Use the search filter and input phrases like “Bronze 1 Duelist Santai” or “Immortal Controller Tryhard”. Our system will recommend teams or players that fit your vibe.',
	},
	{
		q: 'Do I need a Valorant account to use this?',
		a: 'No, you don’t need to link your Riot account. However, adding your rank and main role will help others find you more easily.',
	},
	{
		q: 'Is Valorant Minus One affiliated with Riot Games?',
		a: 'No, Valorant Minus One is a fan-made community platform and is not affiliated with or endorsed by Riot Games.',
	},
	{
		q: 'Can I report a toxic player?',
		a: 'Yes. You can report toxic or abusive players via the support form below. Our moderation team will review and take appropriate action.',
	},
	{
		q: 'How do I contact support?',
		a: 'Use the contact form below or email us at support@valorantminusone.com. We’ll get back to you within 24–48 hours.',
	},
]

const scrollToHash = () => {
	if (typeof window === 'undefined') return
	const hash = window.location.hash
	if (hash) {
		const el = document.querySelector(hash)
		if (el) {
			const yOffset = -80 // offset px (misal header tinggi 80px)
			const y =
				el.getBoundingClientRect().top + window.pageYOffset + yOffset
			window.scrollTo({ top: y, behavior: 'smooth' })
		}
	}
}

const Support = () => {
	useEffect(() => {
		scrollToHash()
		window.addEventListener('hashchange', scrollToHash)
		return () => window.removeEventListener('hashchange', scrollToHash)
	}, [])

	return (
		<Layout>
			<div className="container mx-auto py-20 px-4 max-w-3xl">
				<h1 className="text-4xl font-bold text-primary mb-6">Support</h1>
				{/* Help Center */}
				<div
					id="help-center"
					className="bg-card rounded-xl border border-border p-6 shadow-xl backdrop-blur-md mb-8"
				>
					<h2 className="text-2xl font-semibold mb-4">Help Center</h2>
					<p className="mb-4 text-muted-foreground">
						Find answers, guides, and resources to help you use Valorant Minus One
						effectively.
					</p>
					<a
						href="mailto:support@valorantminusone.com"
						className="text-primary underline"
					>
						Email Support
					</a>
				</div>
				{/* Contact Form */}
				<div
					id="contact-us"
					className="bg-card rounded-xl border border-border p-6 shadow-xl backdrop-blur-md mb-8"
				>
					<h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
					<p className="mb-4 text-muted-foreground">
						Having a question or feedback? Reach out to us!
					</p>
					<form className="space-y-4">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full p-2 rounded border border-border bg-background text-foreground"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full p-2 rounded border border-border bg-background text-foreground"
						/>
						<textarea
							placeholder="Your Message"
							className="w-full p-2 rounded border border-border bg-background text-foreground"
							rows={4}
						/>
						<button
							type="submit"
							className="w-full bg-primary text-white font-semibold py-2 rounded"
						>
							Send Message
						</button>
					</form>
				</div>
				{/* FAQ Section */}
				<div
					id="faq"
					className="bg-card rounded-xl border border-border p-6 shadow-xl backdrop-blur-md"
				>
					<h2 className="text-2xl font-semibold mb-4">FAQ</h2>
					<ul className="space-y-4">
						{faqs.map((faq, idx) => (
							<li key={idx}>
								<p className="font-semibold text-primary mb-1">{faq.q}</p>
								<p className="text-muted-foreground text-sm">{faq.a}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</Layout>
	)
}

export default Support
