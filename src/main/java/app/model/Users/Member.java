//package app.model.Users;
//
//public class Member extends User implements Association{
//    @Override
//    public String extractCode(String mail){
//        try {
//            if (!mail.matches("(.*)@fpt.edu(.*)")){
//                throw new IllegalArgumentException("Not fpt mail so please input your Alumni Code");
//            }
//            int startIndex = mail.indexOf('S');
//            if (startIndex != -1 && startIndex + 8 <= mail.length()) {
//                code = mail.substring(startIndex, startIndex + 8);
//            }
//        }catch (IllegalArgumentException e){
//            e.getMessage();
//        }
//        return code;
//    }
//
//    @Override
//    public boolean checkRole() {
//        return false;
//    }
//}
