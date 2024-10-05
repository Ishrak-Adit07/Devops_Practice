const registerUser = async (name, password, confirmPassword) => {
  if (!name || !password || !confirmPassword) {
    throw Error("All fields are required");
  }

  if (password != confirmPassword) {
    throw Error("Passwords do not match");
  }

  try {
    const registerResponse = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });

    const responseData = await registerResponse.json();

    if (!registerResponse.ok) {
      throw Error(responseData.error);
    }

    localStorage.setItem("webToken", responseData.webToken);
    localStorage.setItem("name", responseData.name);

    return responseData;
  } catch (error) {
    console.error("Error:", error.message);
    throw Error(error.message);
  }
};

const loginUser = async (name, password) => {
  if (!name || !password) {
    throw Error("All fields are required");
  }

  try {
    const loginResponse = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });

    const responseData = await loginResponse.json();

    if (!loginResponse.ok) {
      throw Error(responseData.error);
    }

    localStorage.setItem("webToken", responseData.webToken);
    localStorage.setItem("name", responseData.name);

    return responseData;
  } catch (error) {
    console.error("Error:", error.message);
    throw Error(error.message);
  }
};

export { registerUser, loginUser };
