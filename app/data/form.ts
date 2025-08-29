import { CalendarDate } from '@internationalized/date'
export const defaultMous = {
  title: 'AI Research Collaboration Agreement',
  institution: 'MIT Technology Institute',
  type: 'research',
  duration: '3 years',
  startDate: new CalendarDate(2025, 3, 1),
  endDate: new CalendarDate(2028, 2, 29),
  involved: [
    'College of Engineering',
    'College of Computer Studies',
    'College of Science'
  ],
  description:
    'This Memorandum of Understanding establishes a framework for collaboration between CBSUA and MIT Technology Institute in the field of artificial intelligence research, particularly focusing on agricultural applications.',
}