package app.model.Users;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "CommunityMember")
public class User{

	protected String name;
	protected Integer age;
	protected String mail;
	protected String code = "";
	protected String role = "";

	protected boolean accountNonExpired;

	protected boolean accountNonLocked;

	@Override
	public String toString() {
		return "User{" +
				"name='" + name + '\'' +
				", age=" + age +
				", mail='" + mail + '\'' +
				", code='" + code + '\'' +
				", role=" + role +
				", accountNonExpired=" + accountNonExpired +
				", accountNonLocked=" + accountNonLocked +
				'}';
	}
}

