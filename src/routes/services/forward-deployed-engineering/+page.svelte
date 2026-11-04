<script lang="ts">
	import ServiceDetail from '#lib/components/sections/ServiceDetail.svelte';
	import { getServiceBySlug } from '#lib/data/services';
	import { error } from '@sveltejs/kit';

	const service = getServiceBySlug('forward-deployed-engineering');
	if (!service) error(404, 'Service not found');
</script>

<ServiceDetail {service} />
