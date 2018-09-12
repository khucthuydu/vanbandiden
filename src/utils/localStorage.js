export function getUser() {
  try {
    const user = localStorage.getItem('login');
    if (!user) return undefined;

    return JSON.parse(user);
  } catch (err) {
    return undefined;
  }
}

export function setUser(data) {
  try {
    if(data) localStorage.setItem('login', JSON.stringify(data))
  }
  catch(err){
    
  }
}

export function removeUser() {
  localStorage.removeItem('login')
}
