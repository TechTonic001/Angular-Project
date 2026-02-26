import { Injectable } from '@angular/core';

export interface User {
    username: string;
    email: string;
    password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private users: User[] = [];

    /**
     * Tries to register a new user. Returns `true` on success or `false` if
     * a user with the same email already exists.
     */
    register(user: User): boolean {
        const exists = this.users.some(u => u.email === user.email);
        if (exists) {
            return false;
        }
        this.users.push(user);
        return true;
    }

    // later methods (login, logout, etc.) can be added here
}
