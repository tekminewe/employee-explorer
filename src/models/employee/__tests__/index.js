import axios from 'axios';
import { getSubordinateForEmployee, endpoint } from '../index';
import NotFoundError from '../../../errors/not_found_error';

jest.mock('axios');

const createResponse = (position, subordinates) => {
  if (!subordinates) {
    return Promise.resolve({
      data: [
        position,
      ],
    });
  }

  return Promise.resolve({
    data: [
      position,
      {
        'direct-subordinates': subordinates,
      },
    ],
  });
}

describe('Employee', () => {
  describe('getSubordinateForEmployee', () => {
    afterEach(() => {
      jest.resetAllMocks();
    })

    test('should get return all subordinates', async () => {
      expect.assertions(1);

      axios.get
        .mockImplementation((url) => {
          const path = url.replace(`${endpoint}/`, '');
          switch (path) {
            case 'Employee 1':
              return createResponse('CEO', [
                'Employee 2',
                'Employee 3',
              ]);
            
            case 'Employee 2':
              return createResponse('Manager', [
                'Employee 4',
                'Employee 5',
              ]);

            case 'Employee 3':
              return createResponse('Supervisor', null);

            case 'Employee 4':
              return createResponse('Coach', [
                'Employee 3',
              ]);

            case 'Employee 5':
              return createResponse('Employee', null);

            default:
              throw new Error();
          }
        })

      return expect(getSubordinateForEmployee('Employee 1')).resolves.toEqual([
        'Employee 2',
        'Employee 3',
        'Employee 4',
        'Employee 5',
      ]);
    });

    test('should throw NotFoundError if employee not found', async () => {
      expect.assertions(1);

      axios.get.mockRejectedValue({
        response: {
          status: 404,
        },
      });

      try {
        await getSubordinateForEmployee('Justin');
      } catch (e) {
        expect(e instanceof NotFoundError).toBeTruthy();
      }
    });
  });
});
