<script lang="ts">
	import Seo from '#lib/components/shared/Seo.svelte';
	import Hero from '#lib/components/sections/Hero.svelte';
	import ValueProp from '#lib/components/sections/ValueProp.svelte';
	import ServiceSummaries from '#lib/components/sections/ServiceSummaries.svelte';
	import ProvenImpact from '#lib/components/sections/ProvenImpact.svelte';
	import SelectedExperience from '#lib/components/sections/SelectedExperience.svelte';
	import PhilosophyShort from '#lib/components/sections/PhilosophyShort.svelte';
	import ProcessStrip from '#lib/components/sections/ProcessStrip.svelte';
	import ContactInvite from '#lib/components/sections/ContactInvite.svelte';
	import { profile } from '#lib/data/profile';
</script>

<Seo
	title="Hafizh Fadhlurrohman · Independent Engineering Consultancy"
	description={profile.siteDescription}
	path="/"
/>

<Hero />
<ValueProp />
<ServiceSummaries />
<ProvenImpact />
<SelectedExperience />
<PhilosophyShort />
<ProcessStrip />
<ContactInvite />
