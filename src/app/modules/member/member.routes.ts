import express from 'express';
import { MemberControllers } from './member.controller';

const router = express.Router();

router.post("/", MemberControllers.ceateMember);
router.get("/", MemberControllers.getAllMembersFromDB);
router.get("/:memberId", MemberControllers.getMember);
router.put("/:memberId", MemberControllers.updateMember);
router.delete("/:memberId", MemberControllers.deleteMember);

export const MemberRoutes = router;