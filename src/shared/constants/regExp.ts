export const regEmail =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export const regName = /^[a-zA-Zа-яА-Я]{1,20}/
export const numbersOnlyRegex = /^\d+$/;
export const regPhone = /^.{0,3}[0-9]{10}/
export const regTime = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
export const regDate = /^(19[0-9]|20[0-2][0-4])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/;