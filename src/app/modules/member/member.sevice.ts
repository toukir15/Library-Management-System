import { Member } from "@prisma/client";
import prisma from "../../../shared/prisma";

const creteMemberIntoDB = async (payload: Member) => {
    const result = await prisma.member.create({
        data: payload
    })
 return result
};

const getAllMembersFromDB = async () => {
 const result = await prisma.member.findMany()
 return result
};

const getMemberFromDB = async (memberId: string) => {
 const result = await prisma.member.findUniqueOrThrow({
    where: {memberId: memberId}
 })
 return result
};

const updateMemberIntoDB = async (memberId: string, payload: Partial<Member>) => {
 const result = await prisma.member.update({
    where: {memberId: memberId},
    data: payload
 })
 return result
};

const deleteMemberFromDB = async (memberId: string) => {
 const result = await prisma.member.delete({
    where: {memberId: memberId}
 })
 return result
};

export const MemberServices = {
    creteMemberIntoDB,
    getAllMembersFromDB,
    getMemberFromDB,
    updateMemberIntoDB,
    deleteMemberFromDB
}