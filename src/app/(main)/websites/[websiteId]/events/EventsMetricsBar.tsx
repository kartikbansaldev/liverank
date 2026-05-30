import { LoadingPanel } from '@/components/common/LoadingPanel';
import { useMessages } from '@/components/hooks';
import { useWebsiteSessionStatsQuery } from '@/components/hooks/queries/useWebsiteSessionStatsQuery';
import { MetricCard } from '@/components/metrics/MetricCard';
import { MetricsBar } from '@/components/metrics/MetricsBar';
import { formatLongNumber } from '@/lib/format';

export function EventsMetricsBar({ websiteId }: { websiteId: string }) {
  const { t, labels } = useMessages();
  const { data, isLoading, isFetching, error } = useWebsiteSessionStatsQuery(websiteId);

  return (
    <LoadingPanel data={data} isLoading={isLoading} isFetching={isFetching} error={error}>
      {data && (
        <MetricsBar>
          <MetricCard
            value={data?.visitors?.value}
            label={t(labels.visitors)}
            formatValue={formatLongNumber}
            backgroundColor: '#C5CAFF'
          color: '#000000'
          />
          <MetricCard
            value={data?.visits?.value}
            label={t(labels.visits)}
            formatValue={formatLongNumber}
            backgroundColor: '#E1E7E9'
          color: '#000000'
          />
          <MetricCard
            value={data?.pageviews?.value}
            label={t(labels.views)}
            formatValue={formatLongNumber}
            backgroundColor: '#1C1C1C'
          color: '#ffffff'
          />
          <MetricCard
            value={data?.events?.value}
            label={t(labels.events)}
            formatValue={formatLongNumber}
            backgroundColor: '#F6F6F6'
          color: '#000000'
          />
        </MetricsBar>
      )}
    </LoadingPanel>
  );
}
