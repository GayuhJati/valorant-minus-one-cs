import Layout from '@/components/Layout'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';

const teams = [
	{ id: 1, name: 'Valorant Squad', desc: 'Main bareng setiap malam!', members: 3, rank: 'gold1', rolesNeeded: ['Duelist', 'Initiator'] },
	{ id: 2, name: 'Minus One Team', desc: 'Cari satu lagi buat full tim!', members: 4, rank: 'platinum1', rolesNeeded: ['Controller'] },
	{ id: 3, name: 'Fun Only', desc: 'Santai, no toxic!', members: 2, rank: 'silver1', rolesNeeded: ['Duelist', 'Sentinel'] },
	{ id: 4, name: 'Rank Pushers', desc: 'Push rank bareng!', members: 5, rank: 'diamond1', rolesNeeded: [] },
	{ id: 5, name: 'Beginner Zone', desc: 'Belajar bareng!', members: 1, rank: 'iron1', rolesNeeded: ['Initiator', 'Controller', 'Sentinel'] },
	{ id: 6, name: 'Pro Players', desc: 'Serius, siap turnamen!', members: 5, rank: 'immortal1', rolesNeeded: [] },
	{ id: 7, name: 'Weekend Warriors', desc: 'Main tiap weekend!', members: 3, rank: 'bronze1', rolesNeeded: ['Duelist', 'Controller'] },
	{ id: 8, name: 'Chillers', desc: 'Ngobrol dan main santai!', members: 2, rank: 'silver1', rolesNeeded: ['Sentinel', 'Initiator'] },
	{ id: 9, name: 'Night Owls', desc: 'Main tengah malam!', members: 2, rank: 'ascendant1', rolesNeeded: ['Controller', 'Duelist'] },
	{ id: 10, name: 'Solo Carry', desc: 'Cari carry!', members: 4, rank: 'diamond1', rolesNeeded: ['Duelist'] },
	{ id: 11, name: 'Toxic Free', desc: 'No toxic allowed!', members: 3, rank: 'ascendant1', rolesNeeded: ['Sentinel'] },
	{ id: 12, name: 'Casual Gamers', desc: 'Main santai!', members: 1, rank: 'bronze1', rolesNeeded: ['Controller', 'Initiator'] },
	{ id: 13, name: 'Tryharders', desc: 'Push rank serius!', members: 5, rank: 'radiant', rolesNeeded: [] },
	{ id: 14, name: 'Morning Squad', desc: 'Main pagi!', members: 2, rank: 'silver1', rolesNeeded: ['Sentinel', 'Controller'] },
	{ id: 15, name: 'Snipers Only', desc: 'Tim sniper!', members: 3, rank: 'platinum1', rolesNeeded: ['Initiator'] },
	{ id: 16, name: 'Duelist Team', desc: 'Duelist only!', members: 4, rank: 'gold1', rolesNeeded: ['Duelist'] },
	{ id: 17, name: 'Support Squad', desc: 'Support main!', members: 2, rank: 'silver1', rolesNeeded: ['Controller', 'Sentinel'] },
	{ id: 18, name: 'Rushers', desc: 'Tim rush!', members: 3, rank: 'ascendant1', rolesNeeded: ['Duelist', 'Initiator'] },
	{ id: 19, name: 'Defenders', desc: 'Tim defense!', members: 1, rank: 'platinum1', rolesNeeded: ['Sentinel'] },
	{ id: 20, name: 'All Roles', desc: 'Campur role!', members: 2, rank: 'diamond1', rolesNeeded: ['Duelist', 'Initiator', 'Controller', 'Sentinel'] },
	{ id: 21, name: 'Weekend Legends', desc: 'Main weekend!', members: 4, rank: 'gold1', rolesNeeded: ['Initiator'] },
	{ id: 22, name: 'Valorant Lovers', desc: 'Fans Valorant!', members: 3, rank: 'radiant', rolesNeeded: ['Controller', 'Sentinel'] },
	{ id: 23, name: 'Clutch Team', desc: 'Clutchers!', members: 2, rank: 'immortal1', rolesNeeded: ['Duelist'] },
	{ id: 24, name: 'Ace Hunters', desc: 'Cari ace!', members: 1, rank: 'ascendant1', rolesNeeded: ['Duelist', 'Initiator'] },
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

const valorantRoles = [
  'Duelist', 'Initiator', 'Controller', 'Sentinel'
];

const Board = () => {
	const [page, setPage] = useState(1)
	const [filteredTeams, setFilteredTeams] = useState(teams)
	const [pendingFilter, setPendingFilter] = useState({ search: '', rank: '', role: '', hero: '' })
	const [showProfileForm, setShowProfileForm] = useState(false);
	const [selectedRole, setSelectedRole] = useState<string[]>([]);
	const [selectedRank, setSelectedRank] = useState('');
	const [tagLine, setTagLine] = useState('');
	const [formError, setFormError] = useState('');
	const [profileFilter, setProfileFilter] = useState<{ role?: string[]; rank?: string }>({});

	// Gabungkan filter profile dan filter manual
	const applyAllFilters = (manual = pendingFilter, profile = profileFilter) => {
		let result = teams;
		if (profile.role && profile.role.length > 0) {
			result = result.filter(team =>
				team.rolesNeeded && profile.role!.some(r => team.rolesNeeded.includes(r))
			);
		}
		if (profile.rank) {
			result = result.filter(team =>
				team.rank.toLowerCase().includes(profile.rank!.toLowerCase())
			);
			console.log('cek', result);
		}
		if (manual.search) {
			result = result.filter(team => team.name.toLowerCase().includes(manual.search.toLowerCase()));
		}
		if (manual.rank) {
			result = result.filter(team => team.rank.toLowerCase().includes(manual.rank.toLowerCase()));
		}
		if (manual.role) {
			result = result.filter(team => team.desc.toLowerCase().includes(manual.role.toLowerCase()));
		}
		if (manual.hero) {
			result = result.filter(team => team.desc.toLowerCase().includes(manual.hero.toLowerCase()));
		}
		setFilteredTeams(result);
		setPage(1);
	};

	// Saat mount, ambil filter dari profile
	React.useEffect(() => {
		const user = localStorage.getItem('user');
		const valorantProfile = localStorage.getItem('valorantProfile');
		if (!user && !valorantProfile) {
			setShowProfileForm(true);
		} else if (valorantProfile) {
			const profile = JSON.parse(valorantProfile);
			setProfileFilter({ role: Array.isArray(profile.role) ? profile.role : [profile.role], rank: profile.rank });
		}
	}, []);

	// Setiap filter profile/manual berubah, apply filter
	React.useEffect(() => {
		applyAllFilters();
		// eslint-disable-next-line
	}, [profileFilter, pendingFilter]);

	React.useEffect(() => {
		if (showProfileForm) {
			document.body.classList.add('overflow-y-hidden');
		} else {
			document.body.classList.remove('overflow-y-hidden');
		}
	}, [showProfileForm]);

	const handleProfileSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setFormError('');
		if (selectedRole.length === 0 || !selectedRank || !tagLine) {
			setFormError('Semua field wajib diisi!');
			return;
		}
		localStorage.setItem('valorantProfile', JSON.stringify({ role: selectedRole, rank: selectedRank, tagLine }));
		setProfileFilter({ role: selectedRole, rank: selectedRank });
		setShowProfileForm(false);
	};

	const handleCari = () => {
		applyAllFilters();
	};

	const handleJoin = () =>{
		
	}

	const totalPages = Math.ceil(filteredTeams.length / PAGE_SIZE)
	const pagedTeams = filteredTeams.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

	return (
		<Layout>
			{showProfileForm && (
				<div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 pointer-events-none backdrop-blur">
					<div className="bg-background rounded-2xl shadow-2xl border border-border w-full max-w-md p-8 relative animate-fadeIn pointer-events-auto">
						<h2 className="text-2xl font-bold mb-6 text-center">Profil Valorant</h2>
						<form onSubmit={handleProfileSubmit} className="space-y-5">
							<div>
								<label className="block mb-2 font-medium text-base">Role Valorant</label>
								<div className="grid grid-cols-2 gap-3">
									{valorantRoles.map(role => (
										<button
											type="button"
											key={role}
											className={`border rounded-lg py-2 px-4 font-semibold text-base transition ${selectedRole.includes(role) ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-background text-foreground'}`}
											onClick={() => {
												setSelectedRole(prev => {
													if (prev.includes(role)) {
														return prev.filter(r => r !== role);
													} else if (prev.length < 2) {
														return [...prev, role];
													} else {
														return prev; // ignore if already 2 selected
													}
												});
											}}
											disabled={!selectedRole.includes(role) && selectedRole.length >= 2}
										>
											{role}
										</button>
									))}
								</div>
							</div>
							<div>
								<label className="block mb-2 font-medium text-base">Rank Valorant</label>
								<select
									className="p-2 rounded border border-border w-full bg-background text-foreground"
									value={selectedRank}
									onChange={e => setSelectedRank(e.target.value)}
									required
								>
									<option value="">Pilih Rank</option>
									{ranks.map(r => (
										<option key={r} value={r}>{r}</option>
									))}
								</select>
							</div>
							<div>
								<label className="block mb-2 font-medium text-base">Game Tag Line</label>
								<Input
									type="text"
									placeholder="RiotID#Tag"
									value={tagLine}
									onChange={e => setTagLine(e.target.value)}
									required
								/>
							</div>
							{formError && <div className="text-red-500 text-sm text-center">{formError}</div>}
							<Button type="submit" variant="hero" className="w-full mt-4 text-base py-2">Simpan</Button>
						</form>
					</div>
				</div>
			)}
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
									className="p-2 rounded border text-muted-foreground border-border w-full"
									placeholder="Search for teams..."
									value={pendingFilter.search}
									onChange={e => setPendingFilter(f => ({ ...f, search: e.target.value }))}
									onKeyDown={e => {
										if (e.key === 'Enter') handleCari();
									}}
								/>
							</div>
							<div className="flex flex-col w-full md:w-40 relative">
								<label htmlFor="rank" className="text-xs text-muted-foreground mb-1 font-medium">Rank</label>
								<select
									id="rank"
									className="p-2 pr-8 rounded border border-border w-full bg-background text-foreground appearance-none"
									value={pendingFilter.rank}
									onChange={e => setPendingFilter(f => ({ ...f, rank: e.target.value }))}
								>
									<option value="">All Rank</option>
									{ranks.map(r => (
										<option key={r} value={r}>{r}</option>
									))}
								</select>
								<span className="pointer-events-none absolute right-2 top-8 text-muted-foreground text-base opacity-60">▾</span>
							</div>
							<div className="flex flex-col w-full md:w-40 relative">
								<label htmlFor="role" className="text-xs text-muted-foreground mb-1 font-medium">Role</label>
								<select
									id="role"
									className="p-2 pr-8 rounded border border-border w-full bg-background text-foreground appearance-none"
									value={pendingFilter.role}
									onChange={e => setPendingFilter(f => ({ ...f, role: e.target.value }))}
								>
									<option value="">All Role</option>
									{roles.map(r => (
										<option key={r} value={r}>{r}</option>
									))}
								</select>
								<span className="pointer-events-none absolute right-2 top-8 text-muted-foreground text-base opacity-60">▾</span>
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
							<span className="text-sm text-muted-foreground whitespace-nowrap mr-2">{filteredTeams.length} tim ditemukan</span>
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
					<div className="absolute inset-0 bg-card z-0 pointer-events-none" />
					<div className="relative z-10">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
							{pagedTeams.length === 0 ? (
								<div className="col-span-full flex flex-col items-center justify-center py-16">
									<span className="text-lg text-muted-foreground font-semibold">Room is not found or maybe has been deleted</span>
								</div>
							) : (
								pagedTeams.map((team) => (
									<div
										key={team.id}
										className="bg-background/80 border border-border rounded-xl shadow-lg p-6 flex flex-col justify-between"
									>
										<div>
											<div className="flex justify-between items-start mb-2">
												<h2 className="text-xl font-bold text-primary mb-0 flex-1">{team.name}</h2>
												<div className="flex flex-col items-center ml-4">
													<img
														src={`/src/assets/rank/${team.rank}.png`}
														alt={team.rank}
														className="w-10 h-10 object-contain drop-shadow mb-1"
													/>
													<span className="text-xs font-semibold text-white capitalize text-center">
														{team.rank.replace(/\d+$/, '').replace(/([a-z])([A-Z])/, '$1 $2')}
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
								))
							)}
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