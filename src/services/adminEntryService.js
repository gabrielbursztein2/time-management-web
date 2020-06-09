import httpClient from 'httpClient';
import { formatDateRequest } from 'utils/date';

class AdminEntryService {
  static createEntry(timeEntry) {
    return httpClient.post('/admin/time_entries', { timeEntry });
  }

  static updateEntry(timeEntry) {
    return httpClient.put(`/admin/time_entries/${timeEntry.id}`, { timeEntry });
  }

  static deleteEntry(id) {
    return httpClient.delete(`/admin/time_entries/${id}`);
  }

  static getEntries(start, end) {
    const startDate = formatDateRequest(start);
    const endDate = formatDateRequest(end);
    let url = '/admin/time_entries';
    if (startDate && endDate) {
      url += `?start_date=${startDate}&end_date=${endDate}`;
    }
    return httpClient.get(url);
  }
}

export default AdminEntryService;
