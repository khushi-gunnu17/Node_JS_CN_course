import axios from "axios"

export const userModel = async () => {
  try {
    const response = await axios.get(`https://dummyjson.com/users`);

    // Check if the expected property exists in the response
    if (response.data && Array.isArray(response.data.users)) {
      const usersData = response.data.users.map((user) => ({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        gender: user.gender,
        email: user.email,
        phone: user.phone,
        image: user.image,
        address: {
          city: user.address.city,
        },
      }));
      return Promise.resolve(usersData);
    } else {
      // Handle the case where the expected property is missing or not an array
      console.error("Invalid data format received from the API");
      return Promise.reject("Invalid data format");
    }
  } catch (error) {
    console.error(error);
    return Promise.reject("Failed to fetch user data");
  }
};
