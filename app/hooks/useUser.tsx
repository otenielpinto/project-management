import { useState, useEffect } from "react";

type UserResource = {
  id: string;
  name: string;
  email: string;
};

type UseUserReturn =
  | {
      isLoaded: false;
      isSignedIn: undefined;
      user: undefined;
    }
  | {
      isLoaded: true;
      isSignedIn: false;
      user: null;
    }
  | {
      isLoaded: true;
      isSignedIn: true;
      user: UserResource;
    };

export const useUser = (): UseUserReturn => {
  const [userState, setUserState] = useState<UseUserReturn>({
    isLoaded: false,
    isSignedIn: undefined,
    user: undefined,
  });

  useEffect(() => {
    // Simulação de uma chamada de API para buscar o usuário
    const user = {
      id: "1000",
      name: "Oteniel Pinto",
      email: "oteniel.pinto@gmail.com",
    };
    setUserState({ isLoaded: true, isSignedIn: true, user });
  }, []);

  return userState;
};
