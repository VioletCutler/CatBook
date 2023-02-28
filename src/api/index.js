import axios from 'axios'

export const fetchCats = async () => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "407340d1-c60c-47b0-bff0-bfc2d7caeb15",
      },
    });
    const cats = await response.json();
    return cats
  } catch (error) {
    console.log(error);
  }
};

export const fetchCats2 = async () => {
  const { data } = await axios.get('https://api.thecatapi.com/v1/breeds',{ headers: {
    'Content-Type': 'application/json',
    'x-api-key': "407340d1-c60c-47b0-bff0-bfc2d7caeb15"
  }
  })
  return data
}