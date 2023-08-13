package app.model.Users;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Team {
    //Object Team có cách hoạt động như sau:
    //Khi khởi tạo Class Team, bản thân Team có 1 Map gọi là groups('AI', 'SE','Event'..., Nếu muốn đổi thành nhánh 1 , 2
    // thì tui đổi giá trị của key là Integer sau)
    //nên đoạn này key của Map "group" của nó là tên group đi.
    //bản thân value của Map "group" sẽ có thêm 1 list<ArrayList, idk man some kinds like that>
    //để chứa các Member trong group.
    private Map<String, List<String>> group;
    //Tui để List<String> thay vì là List<User> để tiết kiệm bộ nhớ ha
    //thứ có để bỏ vào List mà sv.
    //Nếu muốn tra ra sinh viên nào thì ta có thể tạo thêm 1 hàm getMember(String code)
    //sáng kiến suy nghĩ lúc học Lab.
    //cá nhân vẫn nghĩ thằng khứa group này nên là private.
    //Liệu rằng chỗ Map này chúng ta có cần nên cook nó thành static???

    //Default Constructor
    public Team(){
        this.group = new HashMap<>();
    }
    //Getter and Setter
    public Map<String, List<String>> getGroup() {
        return group;
    }

    public void setGroup(Map<String, List<String>> group) {
        this.group = group;
    }
    //Methods
    public void addGroup(String groupName){
        //hàm khi khoởi tạo 1 group mới thì
        //key là tên group còn value là 1 arraylist trống trước đi
        this.group.put(groupName, new ArrayList<>());
    }
    public void addMember(String groupName, String memberCode){
        if(this.group.containsKey(groupName)){
            this.group.get(groupName).add(memberCode);
        } else{
            System.out.println("Group " + groupName + "doesn't exist.");
        }
    }
    public void displayAllGroups(){
        this.group.forEach((groupName, memberCode) ->{
            //System.out.println(groupName + ":" + " , " + getMember(memberCode).getName());
            //method getMember(memberCode) viet sau ha
        });
    }
    public void showGroupMemberList(String groupName){
        if(this.group.containsKey(groupName)) {
            System.out.println(groupName + ": " + this.group.get(groupName));
        } else {
            System.out.println("The group " + groupName + "doesn't exist.");
        }
    }


}
