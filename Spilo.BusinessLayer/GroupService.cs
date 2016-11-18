using Dapper;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;

namespace Spilo.BusinessLayer
{
	public interface IGroupService
	{
		List<GroupContract> RetrieveAllGroups();
	}
	public class GroupService : IGroupService
	{
		SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Spilo"].ToString());
		private const string RetrieveGroupSql = @"select	Id as GroupId, 
		Name as GroupName, 
		RegisteredBy as Owner, 
		b.gameCount as GameCount, 
		b.LastPlayed as LastPlayedGame
   from Groups a 
   left outer join (
			select  GroupId,
					Sum(gamesPlayed) gameCount, 
					max(LastPlayedDate) LastPlayed 
			   from GameTypes
		   group by GroupId ) b on a.Id = b.GroupId";

		public List<GroupContract> RetrieveAllGroups()
		{
			var groups = con.Query<GroupContract>(RetrieveGroupSql);
			return groups.ToList();
		}

		public void CreateNewGroup(GroupContract newGroup)
		{
			
		}
	}

	public class GroupContract
	{
		public long GroupId { get; set; }
		public String GroupName { get; set; }
		public string Owner { get; set; }
		public DateTime LastPlayedGame { get; set; }
		public int GameCount { get; set; }
	}


}
