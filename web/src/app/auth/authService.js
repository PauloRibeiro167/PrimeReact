// auth/authService.js
import { USER_TYPES } from '../constants/userTypes';

const SUPER_ADMINS = [
    { name: 'João', password:   '12345' },
    { name: 'Joy', password:    '12345' },
    { name: 'Wesley', password: '12345' },
    { name: 'Paulo', password:  '12345' },
];

export const getCurrentUser = () => {
    // Simulação de obtenção do usuário atual
    return { id: 1, type: USER_TYPES.ADMIN }; 
};

export const isAdmin = (user) => {
    return user.type === USER_TYPES.ADMIN;
};

export const isPublicUser = (user) => {
    return user.type === USER_TYPES.PUBLIC;
};

export const authenticateUser = (name, password) => {
    const user = SUPER_ADMINS.find(admin => admin.name === name && admin.password === password);
    if (user) {
        return { id: user.name, type: USER_TYPES.ADMIN };
    }
    return null;
};