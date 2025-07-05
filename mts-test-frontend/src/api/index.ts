import axios from 'axios';

export interface Option {
  id: string;
  value: string;
  title: string;
}

export interface FetchOptionsResponse {
  data: Option[];
}

export interface SubmitFormPayload {
  option: string;
  email: string;
}

export async function fetchOptions(): Promise<Option[]> {
  const response = await axios.get<FetchOptionsResponse>('http://localhost:1337/api/options');
  return response.data.data;
}

export async function submitForm(payload: SubmitFormPayload): Promise<void> {
  await axios.post('http://localhost:1337/api/forms', {
    data: {
      content: payload
    }
  });
} 