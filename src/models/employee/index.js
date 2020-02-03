import axios from 'axios';

export const endpoint = 'http://api.additivasia.io/api/v1/assignment/employees';

const getSubordinate = async (count, subordinateSet) => {
  const employeeName = [...subordinateSet][count];
  const response = await axios.get(`${endpoint}/${employeeName}`);
  const { data } = response;
  const [, subordinate] = data;
  if (subordinate) {
    const subordinates = subordinate['direct-subordinates'];
    subordinates.forEach((sub) => subordinateSet.add(sub));
  }

  if (count === subordinateSet.size - 1) {
    return subordinateSet;
  } else {
    return await getSubordinate(++count, subordinateSet);
  }
}

export const getSubordinateForEmployee = async (employeeName) => {
  const subordinateSet = new Set();
  subordinateSet.add(employeeName);

  try {
    const set = await getSubordinate(0, subordinateSet);
    set.delete(employeeName);
    return [...set];
  } catch (error) {
    throw new Error('Unexpected error occured');
  }
};
