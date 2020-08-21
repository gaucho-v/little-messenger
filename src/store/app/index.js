export const filterContacts = (contact, allContacts, userContacts = []) => {
  if (!allContacts.length) return null;
  const search = contact.toLowerCase().trim();

  const lowerUserContacts = userContacts.map(el => el.toLowerCase());

  const filtered = allContacts.filter(
    el =>
      el.slice(0, search.length).toLowerCase().includes(search) &&
      !lowerUserContacts.includes(el.toLowerCase())
  );

  return [...filtered];
};
