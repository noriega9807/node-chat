const expect = require('expect');
const {
    Users
} = require('./users');

describe('Users', () => {

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Erick',
            room: 'hola'
        }, {
            id: '2',
            name: 'Lina',
            room: 'react'
        }, {
            id: '3',
            name: 'Popo',
            room: 'hola'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Erick',
            room: 'pruebas'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '2';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for hola room', () => {
        var userList = users.getUserList('hola');

        expect(userList).toEqual(['Erick', 'Popo']);
    });

    it('should return names for react room', () => {
        var userList = users.getUserList('react');

        expect(userList).toEqual(['Lina']);
    });
});
