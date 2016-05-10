using Nancy;
using Spilo.BusinessLayer;

namespace SpiloV2.Modules
{
	public class GroupsModule : NancyModule
	{
		private readonly IGroupService _service;
		public GroupsModule() :base("/Groups")
		{
			_service = new GroupService();
			Get["/AllGroups"] = parameters =>
			{
				return Response.AsJson(_service.RetrieveAllGroups());
			};
		}
	}
}