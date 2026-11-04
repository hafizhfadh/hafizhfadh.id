<script lang="ts">
	import { page } from '$app/state';
	import Button from '#lib/components/ui/Button.svelte';
	import Badge from '#lib/components/ui/Badge.svelte';
	import { Terminal, Home, ArrowLeft } from 'lucide-svelte';
</script>

<div class="min-h-[70vh] flex items-center justify-center px-4 py-24">
	<div class="max-w-md w-full p-8 rounded-2xl bg-[#111520] border border-slate-800 text-center space-y-6">
		<div class="flex justify-center">
			<Badge variant="amber">HTTP {page.status}</Badge>
		</div>

		<div class="space-y-2">
			<h1 class="text-3xl font-mono font-bold text-white tracking-tight">
				{page.status === 404 ? 'Resource Not Found' : 'System Exception'}
			</h1>
			<p class="text-sm text-slate-400 font-sans">
				{page.error?.message || 'The requested route does not exist or has been relocated.'}
			</p>
		</div>

		<div class="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 text-left">
			<p class="text-emerald-400">&gt; routing.resolve({page.url.pathname})</p>
			<p class="text-rose-400">&gt; Status: 404 NULL_POINTER_EXCEPTION</p>
		</div>

		<div class="pt-2 flex justify-center gap-3">
			<Button href="/" variant="primary" size="md">
				<Home class="w-4 h-4" />
				Return to Base
			</Button>
		</div>
	</div>
</div>
