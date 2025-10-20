import Layout from '@/components/Layout'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const teams = [
	{ id: 1, name: 'Valorant Squad', desc: 'Main bareng setiap malam!', members: 3, rank: 'gold1' },
	{ id: 2, name: 'Minus One Team', desc: 'Cari satu lagi buat full tim!', members: 4, rank: 'platinum1' },
	{ id: 3, name: 'Fun Only', desc: 'Santai, no toxic!', members: 2, rank: 'silver2' },
	{ id: 4, name: 'Rank Pushers', desc: 'Push rank bareng!', members: 5, rank: 'diamond1' },
	{ id: 5, name: 'Beginner Zone', desc: 'Belajar bareng!', members: 1, rank: 'iron2' },
	{ id: 6, name: 'Pro Players', desc: 'Serius, siap turnamen!', members: 5, rank: 'immortal3' },
	{ id: 7, name: 'Weekend Warriors', desc: 'Main tiap weekend!', members: 3, rank: 'bronze3' },
	{ id: 8, name: 'Chillers', desc: 'Ngobrol dan main santai!', members: 2, rank: 'silver1' },
	{ id: 9, name: 'Night Owls', desc: 'Main tengah malam!', members: 2, rank: 'ascendant1' },
	{ id: 10, name: 'Solo Carry', desc: 'Cari carry!', members: 4, rank: 'diamond3' },
	{ id: 11, name: 'Toxic Free', desc: 'No toxic allowed!', members: 3, rank: 'ascendant2' },
	{ id: 12, name: 'Casual Gamers', desc: 'Main santai!', members: 1, rank: 'bronze3' },
	{ id: 13, name: 'Tryharders', desc: 'Push rank serius!', members: 5, rank: 'radiant' },
	{ id: 14, name: 'Morning Squad', desc: 'Main pagi!', members: 2, rank: 'silver2' },
	{ id: 15, name: 'Snipers Only', desc: 'Tim sniper!', members: 3, rank: 'platinum3' },
	{ id: 16, name: 'Duelist Team', desc: 'Duelist only!', members: 4, rank: 'gold1' },
	{ id: 17, name: 'Support Squad', desc: 'Support main!', members: 2, rank: 'silver1' },
	{ id: 18, name: 'Rushers', desc: 'Tim rush!', members: 3, rank: 'ascendant1' },
	{ id: 19, name: 'Defenders', desc: 'Tim defense!', members: 1, rank: 'platinum1' },
	{ id: 20, name: 'All Roles', desc: 'Campur role!', members: 2, rank: 'diamond1' },
	{ id: 21, name: 'Weekend Legends', desc: 'Main weekend!', members: 4, rank: 'gold1' },
	{ id: 22, name: 'Valorant Lovers', desc: 'Fans Valorant!', members: 3, rank: 'radiant' },
	{ id: 23, name: 'Clutch Team', desc: 'Clutchers!', members: 2, rank: 'immortal3' },
	{ id: 24, name: 'Ace Hunters', desc: 'Cari ace!', members: 1, rank: 'ascendant1' },
]

const ranks = [
	'Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ascendant', 'Immortal', 'Radiant'
]
const roles = [
	'Duelist', 'Initiator', 'Controller', 'Sentinel'
]
const heroes = [
	'Jett', 'Reyna', 'Omen', 'Sova', 'Killjoy', 'Phoenix', 'Cypher', 'Brimstone', 'Viper', 'Sage', 'Raze', 'Skye', 'Yoru', 'Astra', 'Chamber', 'Fade', 'Neon', 'Harbor', 'Gekko', 'Deadlock', 'Iso'
]

const PAGE_SIZE = 9

const Board = () => {
	const [page, setPage] = useState(1)
	const [filteredTeams, setFilteredTeams] = useState(teams)
	const [pendingFilter, setPendingFilter] = useState({ search: '', rank: '', role: '', hero: '' })

	const handleCari = () => {
		let result = teams
		if (pendingFilter.search) {
			result = result.filter(team => team.name.toLowerCase().includes(pendingFilter.search.toLowerCase()))
		}
		if (pendingFilter.rank) {
			result = result.filter(team => team.rank.toLowerCase().includes(pendingFilter.rank.toLowerCase()))
		}
		if (pendingFilter.role) {
			result = result.filter(team => team.desc.toLowerCase().includes(pendingFilter.role.toLowerCase()))
		}
		if (pendingFilter.hero) {
			result = result.filter(team => team.desc.toLowerCase().includes(pendingFilter.hero.toLowerCase()))
		}
		setFilteredTeams(result)
		setPage(1)
	}

	const totalPages = Math.ceil(filteredTeams.length / PAGE_SIZE)
	const pagedTeams = filteredTeams.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

	return (
		<Layout>
			<div className="container mx-auto py-20 px-2">
				<h1 className="text-6xl font-bold text-white drop-shadow-lg">Board</h1>
				<p className="text-md mb-8 text-primary">Find your perfect teammate and go win some game with them !</p>
				<div className="bg-card rounded-xl border border-border mb-8 p-6 shadow-xl backdrop-blur-md">
					<div className="flex flex-col md:flex-row md:items-end gap-6">
						<div className="flex flex-col md:flex-row gap-4 w-full">
							<div className="flex flex-col w-full md:w-1/3">
								<label htmlFor="search" className="text-xs text-muted-foreground mb-1 font-medium">Search for a team</label>
								<input
									id="search"
									type="text"
									className="p-2 rounded border border-border w-full"
									placeholder="Search for teams..."
									value={pendingFilter.search}
									onChange={e => setPendingFilter(f => ({ ...f, search: e.target.value }))}
								/>
							</div>
							<div className="flex flex-col w-full md:w-40">
								<label htmlFor="rank" className="text-xs text-muted-foreground mb-1 font-medium">Rank</label>
								<select
									id="rank"
									className="p-2 rounded border border-border w-full bg-background text-foreground"
									value={pendingFilter.rank}
									onChange={e => setPendingFilter(f => ({ ...f, rank: e.target.value }))}
								>
									<option value="">All Rank</option>
									{ranks.map(r => (
										<option key={r} value={r}>{r}</option>
									))}
								</select>
							</div>
							<div className="flex flex-col w-full md:w-40">
								<label htmlFor="role" className="text-xs text-muted-foreground mb-1 font-medium">Role</label>
								<select
									id="role"
									className="p-2 rounded border border-border w-full bg-background text-foreground"
									value={pendingFilter.role}
									onChange={e => setPendingFilter(f => ({ ...f, role: e.target.value }))}
								>
									<option value="">All Role</option>
									{roles.map(r => (
										<option key={r} value={r}>{r}</option>
									))}
								</select>
							</div>
							<div className="flex flex-col w-full md:w-40">
								<label htmlFor="hero" className="text-xs text-muted-foreground mb-1 font-medium">Hero</label>
								<select
									id="hero"
									className="p-2 rounded border border-border w-full bg-background text-foreground"
									value={pendingFilter.hero}
									onChange={e => setPendingFilter(f => ({ ...f, hero: e.target.value }))}
								>
									<option value="">All Hero</option>
									{heroes.map(h => (
										<option key={h} value={h}>{h}</option>
									))}
								</select>
							</div>
							<div className="flex items-end md:items-end">
								<Button
									variant="default"
									className="text-sm px-5 py-2 min-w-[80px] h-10 bg-primary text-white font-semibold shadow-md hover:bg-primary/80 transition"
									onClick={handleCari}
								>
									Search
								</Button>
							</div>
						</div>
						<div className="flex flex-row gap-2 items-center md:ml-auto mt-4 md:mt-0">
							<span className="text-sm text-muted-foreground whitespace-nowrap">{filteredTeams.length} tim ditemukan</span>
							<Button
								variant="outline"
								className="text-xs px-3 py-1"
								onClick={() => {
									setPendingFilter({ search: '', rank: '', role: '', hero: '' });
									setFilteredTeams(teams);
									setPage(1);
								}}
							>
								Reset Filter
							</Button>
						</div>
					</div>
				</div>

				{/* Gradient wrapper hanya untuk list card dan pagination */}
				<div className="relative rounded-2xl overflow-hidden mb-8 p-6">
					<div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-800 to-neutral-900 opacity-80 z-0 pointer-events-none" />
					<div className="relative z-10">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
							{pagedTeams.map((team) => (
								<div
									key={team.id}
									className="bg-background/80 border border-border rounded-xl shadow-lg p-6 flex flex-col justify-between"
								>
									<div>
										<div className="flex justify-between items-start mb-2">
											{/* Title */}
											<h2 className="text-xl font-bold text-primary mb-0 flex-1">{team.name}</h2>
											{/* Rank logo + label */}
											<div className="flex flex-col items-center ml-4">
												<img
													src={`/src/assets/rank/${team.rank}.png`}
													alt={team.rank}
													className="w-10 h-10 object-contain drop-shadow mb-1"
												/>
												<span className="text-xs font-semibold text-white capitalize text-center">
													{team.rank.replace(/\d+$/, '').replace(/([a-z])([A-Z])/, '$1 $2')} {team.rank.match(/\d+$/) ? team.rank.match(/\d+$/)[0] : ''}
												</span>
											</div>
										</div>
										<p className="text-foreground/80 mb-2">{team.desc}</p>
										<span className="text-sm text-muted-foreground">
											{team.members} / 5 anggota
										</span>
									</div>
									<Button
										className="mt-4 w-full bg-primary text-white font-semibold hover:bg-primary/80 transition"
										disabled={team.members >= 5}
									>
										{team.members < 5 ? 'Join Tim' : 'Tim Penuh'}
									</Button>
								</div>
							))}
						</div>
						{/* Pagination */}
						<div className="flex justify-center items-center gap-2 pb-2">
							<Button
								variant="ghost"
								disabled={page === 1}
								onClick={() => setPage(page - 1)}
							>
								Previous
							</Button>
							<span className="px-4 py-2 rounded bg-background border border-border text-primary font-bold">
								{page} / {totalPages}
							</span>
							<Button
								variant="ghost"
								disabled={page === totalPages}
								onClick={() => setPage(page + 1)}
							>
								Next
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Board