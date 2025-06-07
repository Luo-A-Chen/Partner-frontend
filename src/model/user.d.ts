/**
 *
 * 用户属性
 */
export type UserType={
    id:number,
    userAccount:string,
    username:string,
    avatarUrl:string,
    profile?:string,
    gender:number,
    phone:string,
    email:string,
    userStatus:number,
    userRole:number,
    planetCode:string,
    tags:string[],
    updateTime:Date
}