package app.model;



import javax.persistence.*;
import javax.print.DocFlavor;

@Entity
@Table(name = "Members")
public class User { //id
	public enum Provider{
		LOCAL
		, GOOGLE
	}

	@Enumerated(EnumType.STRING)
	private Provider provider;

	public Provider getProvider() {
		return provider;
	}

	public void setProvider(Provider provider) {
		this.provider = provider;
	}

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	protected String name;
	protected Integer age;
	protected String mail;
	protected String code = "";



	protected boolean accountNonExpired;

	protected boolean accountNonLocked;

	public User(){

	}

	public User(String name, Integer age, String mail) {
		this.name = name;
		this.age = age;
		this.mail = mail;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public void extractCode(String mail) {
		int startIndex = mail.indexOf('S');
		if (startIndex != -1 && startIndex + 8 <= mail.length()) {
			code = mail.substring(startIndex, startIndex + 8);
		}

	}

}