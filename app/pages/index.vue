<template>
    <Page title="ILSP" description="Welcome to CBSUA International Linkages Management System">
        <template #actions>
            <UButton label="View Calendar" icon="i-lucide-calendar" color="neutral" variant="outline" size="lg" block
                class="justify-center" />
            <UButton label="Quick Add" icon="i-lucide-plus" size="lg" block class="justify-center" />
        </template>
        <template #content>
            <div class="grid lg:grid-cols-4 gap-4">
                <StatCard
                    v-for="(stat, index) in statCards"
                    :key="index"
                    v-bind="stat"
                />
            </div>

            <div class="grid lg:grid-cols-4 gap-4">
                <div class="grid lg:grid-cols-2 lg:col-span-3 gap-4">
                    <Block title="Partnership Distribution" description="Pie chart goes here">
                        <template #content>
                            <DonutChart />
                            <!-- <PieChart /> -->
                        </template>
                    </Block>
                    <Block title="Department Activity" description="Bar graph goes here">
                        <template #content>
                            <StackedBarChart />
                            <!-- <BarGraph /> -->
                        </template>
                    </Block>
                </div>
                <Block title="Quick Actions" description="Quick actions goes here">
                    <template #content>
                        <UButton label="Add New Partners" trailing-icon="i-lucide-users" variant="outline" color="neutral" size="lg" class="justify-between md:p-4 lg:p-6" />
                        <UButton label="Create MOU" trailing-icon="i-lucide-pencil-line" variant="outline" color="neutral" size="lg" class="justify-between md:p-4 lg:p-6" />
                        <UButton label="Log Activity" trailing-icon="i-lucide-plus" variant="outline" color="neutral" size="lg" class="justify-between md:p-4 lg:p-6" />
                        <UButton label="Generate Report" trailing-icon="i-lucide-file-text" variant="outline" color="neutral" size="lg" class="justify-between md:p-4 lg:p-6" />
                    </template>
                </Block>
            </div>

            <div class="grid lg:grid-cols-2 gap-4">
                <Block title="Recent Activities" description="Add description for recent activities" noBodyPadding showDivider>
                    <template #content>
                        <ListGroup>
                            <ActivityItem
                                v-for="(activity, index) in activityItems"
                                :key="index"
                                v-bind="activity"
                            />
                        </ListGroup>
                    </template>
                </Block>
                <Block title="Upcoming Deadlines" description="Add description for upcoming deadlines" noBodyPadding showDivider>
                    <template #content>
                        <ListGroup>
                            <DeadlineItem
                                v-for="(deadline, index) in deadlineItems"
                                :key="index"
                                v-bind="deadline"
                                class="min-h-[81px]"
                            />
                        </ListGroup>
                    </template>
                </Block>
            </div>
        </template>
    </Page>
</template>

<script setup lang="ts">
import { activityItems, statCards, deadlineItems } from '~/data'
import Page from '~/components/wrapper/Page.vue'
import Block from '~/components/wrapper/Block.vue'
import ListGroup from '~/components/wrapper/ListGroup.vue'
import DonutChart from '~/components/apexchart/DonutChart.vue'
import StackedBarChart from '~/components/apexchart/StackedBarChart.vue'
import StatCard from '~/components/dashboard/StatCard.vue'
import ActivityItem from '~/components/dashboard/ActivityItem.vue'
import DeadlineItem from '~/components/dashboard/DeadlineItem.vue'
</script>