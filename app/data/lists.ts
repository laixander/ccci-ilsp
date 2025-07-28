

import type { PartnerListProps } from '~/types/models'
export const partnerLists: PartnerListProps[] = [
  {
    name: 'Tokyo University',
    sector: 'Academic',
    country: 'Japan',
    contactPerson: 'Dr. Hiroshi Tanaka',
    activeMous: 3,
    completed: 12,
    ongoing: 5,
    status: 'active',
    statusColor: 'success',
    statusVariant: 'soft',
  },
  {
    name: 'Stanford University',
    sector: 'Academic',
    country: 'USA',
    contactPerson: 'Prof. Jane Lee',
    activeMous: 4,
    completed: 10,
    ongoing: 2,
    status: 'pending',
    statusColor: 'warning',
    statusVariant: 'soft',
  },
  {
    name: 'Siemens AG',
    sector: 'Industry',
    country: 'Germany',
    contactPerson: 'Mr. Klaus Müller',
    activeMous: 1,
    completed: 6,
    ongoing: 1,
    status: 'inactive',
    statusColor: 'error',
    statusVariant: 'soft',
  },
  {
    name: 'University of Melbourne',
    sector: 'Academic',
    country: 'Australia',
    contactPerson: 'Dr. Emma Watson',
    activeMous: 2,
    completed: 9,
    ongoing: 4,
    status: 'active',
    statusColor: 'success',
    statusVariant: 'soft',
  },
]

