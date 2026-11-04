<script lang="ts">
	import ServiceDetail from '#lib/components/sections/ServiceDetail.svelte';
	import { getServiceBySlug } from '#lib/data/services';
	import { error } from '@sveltejs/kit';

	const service = getServiceBySlug('custom-applications');
	if (!service) error(404, 'Service not found');
</script>

<ServiceDetail {service} />
